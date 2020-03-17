import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Dropdown from '../../components/Dropdown';
import SubpartList from './SubpartList';

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
  const [rowObj, setRowObj] = useState({ rowStart: 0, rowEnd: 9, year: 2018 });

  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const getData = ({ rowStart, rowEnd, year }) => {
    const GHG_URL = `https://enviro.epa.gov/enviro/efservice/HH_SUBPART_LEVEL_INFORMATION/REPORTING_YEAR/=/${year}/rows/${rowStart}:${rowEnd}/JSON`;
    async function fetchPost() {
      try {
        // attempt fetch
        const apiData = await axios.get(GHG_URL).then(res => res.data);
        setData(prevState => [...prevState, ...apiData]); // set data
      } catch (error) {
        setError(error); // set error
      }
    }
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
          setRowObj(prevState => ({
            ...prevState,
            rowStart: prevState.rowEnd + 1,
            rowEnd: prevState.rowEnd + 10
          }));
        }
      },
      true
    );
    return () => window.removeEventListener('scroll', () => {}, false);
  }, []);

  useEffect(() => {
    getData(rowObj);
  }, [rowObj]);

  return (
    <>
      <Dropdown clickHanlder={setRowObj} reset={setData} />
      <div id="list" className={classes.root}>
        {error ? (
          <>
            <Typography variant="h2" component="h3">
              Whoops, we encountered a problem...
            </Typography>
          </>
        ) : (
          <SubpartList data={data} />
        )}
      </div>
    </>
  );
}
