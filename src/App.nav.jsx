import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Home, About } from 'pages';
import { AppHeader } from 'components/shared';

export default () => (
  <div className="root">
    <AppHeader />
    <div className="app-body">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  </div>
);
