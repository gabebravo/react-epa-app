import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paperStyle: {
    padding: '2rem'
  }
}));

export default function SubpartList({ data }) {
  const classes = useStyles();

  return (
    data.length > 0 &&
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
    )
  );
}
