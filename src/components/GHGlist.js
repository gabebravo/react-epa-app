import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function GHGlist({ apiData }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="greenhouse gas emmission list">
        {apiData &&
          apiData.map(
            ({
              FACILITY_ID,
              FACILITY_NAME,
              IS_LANDFILL_OPEN,
              DOES_LNDFIL_HAVE_GAS_CLCT,
              ANNUAL_MODELED_CH4_GENERATION
            }) => (
              <div key={FACILITY_ID}>
                <ListItem button>
                  <ListItemText primary={FACILITY_NAME} />
                  <ListItemText primary={`Open: ${IS_LANDFILL_OPEN}`} />
                  <ListItemText
                    primary={`CLCT: ${DOES_LNDFIL_HAVE_GAS_CLCT}`}
                  />
                  <ListItemText
                    primary={`CH4: ${ANNUAL_MODELED_CH4_GENERATION}`}
                  />
                </ListItem>
                <Divider />
              </div>
            )
          )}
      </List>
    </div>
  );
}
