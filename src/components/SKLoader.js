import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 300
  }
});

export default function SKLoader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Skeleton animation="wave" variant="rect" width={1000} height={500} />
    </div>
  );
}
