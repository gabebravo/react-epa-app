import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { cyan, lightBlue } from '@material-ui/core/colors';
import Header from './components/Header';
import Routes from './Routes';

const theme = createMuiTheme({
  palette: {
    primary: { main: cyan[500], light: cyan[200] },
    secondary: { main: lightBlue[500], light: lightBlue[200] }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    fontWeightMedium: 500,
    body1: {
      fontWeight: 500
    },
    subheading: {
      fontSize: 12
    }
  },
  overrides: {}
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
