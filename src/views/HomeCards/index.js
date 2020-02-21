import React from 'react';
import HomeCard from '../../components/HomeCard';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Title from '../../components/Title';

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

export default function HomeCards() {
  const classes = useStyles();
  return (
    <>
      <Title text="ENVIROFACTS SECTIONS" />
      <div className={classes.root}>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} sm={8}>
            <HomeCard
              header="Landfill Info"
              text="Envirofacts EPA data for Landfill C02 in 2018"
              imgUrl="https://st8.cannypic.com/thumbs/41/412647_632_canny_pic.jpg"
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
