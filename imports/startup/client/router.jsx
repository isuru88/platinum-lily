import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import App from '../../ui/layouts/app.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route name="app" path="/" component={App}></Route>
  </Router>
);
