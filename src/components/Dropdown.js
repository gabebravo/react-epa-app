import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, Menu, MenuItem } from '@material-ui/core';

const ITEM_HEIGHT = 48;
const OPTIONS = [
  '2018',
  '2017',
  '2016',
  '2015',
  '2014',
  '2013',
  '2012',
  '2011',
  '2010'
];

const useStyles = makeStyles(theme => ({
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem'
  },
  buttonStyle: {
    color: 'white',
    width: 150
  }
}));

const StyledMenu = withStyles({})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center'
    }}
    PaperProps={{
      style: {
        maxHeight: ITEM_HEIGHT * 4.5,
        width: 150,
        border: '1px solid #d3d4d5'
      }
    }}
    {...props}
  />
));

export default function Dropdown({ clickHanlder, reset }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = ev => {
    setAnchorEl(null);
    reset([]);
    const chosenYear = ev.target.attributes.getNamedItem('data-info').value;
    clickHanlder({
      rowStart: 0,
      rowEnd: 9,
      year: chosenYear
    });
  };

  return (
    <div className={classes.buttonWrapper}>
      <Button
        className={classes.buttonStyle}
        variant="contained"
        color="secondary"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Pick Year
      </Button>
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {OPTIONS.map(year => (
          <MenuItem data-info={year} key={year} onClick={handleClose}>
            {year}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
