import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeCards from './views/HomeCards';
import GHGLandfills from './views/GHGLandfills';
const NoMatch = () => 'There is nothing to see here';

export default function Routes() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomeCards />
          </Route>
          <Route path="/landfills">
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
