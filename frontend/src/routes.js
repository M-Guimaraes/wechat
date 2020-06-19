import React from 'react';
import { createBrowserHistory } from 'history';
import Chat from './pages/Chat'
import Join from './pages/Join'
import Home from './pages/Home'

import { Router, Switch, Route } from 'react-router-dom';

const Routes = () => {
  const history = createBrowserHistory()
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/join" component={Join} />
      </Switch>
    </Router>
  );
}

export default Routes