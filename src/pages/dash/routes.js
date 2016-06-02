import React from 'react';
import { Route } from 'react-router';
import Auth from 'containers/AuthContainer';
// import Dash from 'containers/DashContainer';
import DashLayout from 'layouts/Dash/Dash';

export const makeDashRoutes = () => {
  return (
    <Route path="/dashboard" component={DashLayout}>
    {/*<Route path="/dashboard" component={Auth(DashLayout)}>*/}
    </Route>
  );
};

export default makeDashRoutes;
