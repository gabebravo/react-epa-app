import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  paperStyle: {
    padding: '2rem'
  }
}));

export default function GHGlist({ apiData }) {
  console.log('apiData', apiData);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {apiData &&
        apiData.map(
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
                      <Grid item xs={4}>{FACILITY_NAME}</Grid>
                      <Grid item xs={2}>{`Year: ${REPORTING_YEAR}`}</Grid>
                      <Grid item xs={3}>{`GHG Name: ${GHG_NAME}`}</Grid>
                      <Grid item xs={3}>{`GHG Quntity: ${GHG_QUANTITY}`}</Grid>
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
