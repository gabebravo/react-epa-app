import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  paperStyle: {
    padding: '2rem'
  }
}));

export default function GHGlist() {
  const classes = useStyles();
  const [loadMore, setLoadMore] = useState(true);
  const [rowObj, setRowObj] = useState({ rowStart: 0, rowEnd: 9 });

  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const getData = () => {
    const { rowStart, rowEnd } = rowObj;
    const GHG_URL = `https://enviro.epa.gov/enviro/efservice/HH_SUBPART_LEVEL_INFORMATION/REPORTING_YEAR/=/2018/rows/${rowStart}:${rowEnd}/JSON`;
    async function fetchPost() {
      try {
        // attempt fetch
        const apiData = await axios.get(GHG_URL).then(res => res.data);
        setData(prevState => [...prevState, ...apiData]); // set data
        setRowObj(prevState => ({
          rowStart: prevState.rowEnd + 1,
          rowEnd: prevState.rowEnd + 10
        }));
      } catch (error) {
        setError(error); // set error
      } finally {
        // runs last only under try/pass condiiton >> resets loading
        setIsLoading(false);
      }
    }

    // set the loading flag & make api call
    setIsLoading(true);
    fetchPost();
  };

  useEffect(() => {
    const list = document.getElementById('list');
    window.addEventListener(
      'scroll',
      () => {
        if (
          window.scrollY + window.innerHeight ===
          list.clientHeight + list.offsetTop + 8
        ) {
          setLoadMore(true);
        }
      },
      true
    );
    return () => window.removeEventListener('scroll', () => {}, false);
  }, []);

  useEffect(() => {
    if (loadMore) {
      getData();
      setLoadMore(false);
    }
  }, [loadMore]);

  console.log('data', data);

  return (
    <div id="list" className={classes.root}>
      {data.length > 0 &&
        data.map(
          ({
            FACILITY_ID,
            REPORTING_YEAR,
            FACILITY_NAME,
            GHG_NAME,
            GHG_QUANTITY
          }) => (
            <div key={FACILITY_ID}>
              <Grid container justify="center" spacing={3}>
                <Grid item xs={12} sm={8}>
                  <Paper
                    className={classes.paperStyle}
                    component="div"
                    variant="outlined"
                  >
                    <Grid container justify="center" spacing={3}>
                      <Grid item xs={4}>
                        <Typography>{FACILITY_NAME}</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography>{`Year: ${REPORTING_YEAR}`}</Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography>{`GHG: ${GHG_NAME}`}</Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography>{`GHG Quantity: ${GHG_QUANTITY.toFixed(
                          2
                        )}`}</Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          )
        )}
    </div>
  );
}
