import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import GHGLandfills from './views/GHGLandfills';
const NoMatch = () => 'There is nothing to see here';

export default function Routes() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <GHGLandfills />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
