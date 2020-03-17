import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Title from '../../components/Title';
import GHGlist from './GHGlist';

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

export default function GHGSubpartInfo() {
  const classes = useStyles();
  return (
    <>
      <Title text="GHG SUBPART INFO" />
      <div className={classes.root}>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} sm={8}>
            <GHGlist />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
