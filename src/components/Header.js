import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
// import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const StyledAppBar = styled(AppBar)({
  color: 'white'
});
const StyledIcon = styled(HomeIcon)({
  color: 'white'
});

export default function Header() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div className={classes.root}>
      <StyledAppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            onClick={() => history.push('/')}
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
          >
            <StyledIcon />
          </IconButton>
          <Typography variant="h6">Envirofacts Data</Typography>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}
