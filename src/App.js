import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { cyan, lightBlue } from '@material-ui/core/colors';
import Header from './components/Header';
import Routes from './Routes';

const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: lightBlue
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
