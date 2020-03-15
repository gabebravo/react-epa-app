import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { cyan, lightBlue } from '@material-ui/core/colors';
import Routes from './Routes';

const fonts = [
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"'
].join(',');

let theme = createMuiTheme({
  palette: {
    primary: { main: cyan[500], light: cyan[200] },
    secondary: { main: lightBlue[500], light: lightBlue[200] }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: fonts,
    subheading: {
      fontSize: 12
    }
  },
  overrides: {}
});

theme.typography.body1 = {
  fontFamily: fonts,
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem'
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
