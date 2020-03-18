import React from 'react';
import useFetch from '../../hooks/useFetch';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import Skeleton from '../../components/SKLoader';
import GHGTable from './GHGTable';
import Title from '../../components/Title';

const GHG_URL =
  'https://enviro.epa.gov/enviro/efservice/HH_LANDFILL_INFO/REPORTING_YEAR/=/2018/rows/0:199/JSON';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '3rem'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const Error = () => <Paper>Woops... something went wrong!</Paper>;

export default function GHGLandfills() {
  const classes = useStyles();
  const { loading, error, data } = useFetch(GHG_URL);
  return (
    <>
      <Title text="GHG LANDFILL INFO" />
      <div className={classes.root}>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} sm={8}>
            {loading ? (
              <Skeleton />
            ) : error ? (
              <Error />
            ) : data ? (
              <GHGTable apiData={data} />
            ) : null}
          </Grid>
        </Grid>
      </div>
    </>
  );
}
