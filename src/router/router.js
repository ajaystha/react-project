import React from 'react';
import { Route, Switch, Redirect } from  'react-router-dom';

import MainView from '../containers/MainView/MainView';
import CarDetailView from '../containers/CarDetailView/CarDetailView';
import PageNotFound from '../components/PageNotFound/PageNotFound';


const router = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/cars" />} />
    <Route exact path="/cars" component={MainView} />
    <Route path="/cars/:id" component={CarDetailView} />
    <Route component={PageNotFound} />
  </Switch>
);
export default router;
