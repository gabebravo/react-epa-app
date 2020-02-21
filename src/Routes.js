import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeCards from './views/HomeCards';
import GHGLandfills from './views/GHGLandfills';
const NoMatch = () => 'There is nothing to see here';

export default function Routes() {
  return (
    <div>
      <Router>
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
