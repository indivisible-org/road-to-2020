import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EventsDashboard from '../containers/EventsDashboard';

const AppRouter = () => (
  <BrowserRouter basename="/indivisible-map/">
    <div>
      <Switch>
        <Route path="/events" component={EventsDashboard} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
