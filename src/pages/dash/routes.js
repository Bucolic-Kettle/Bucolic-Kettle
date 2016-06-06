import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Auth from 'containers/AuthContainer';
// import Dash from 'containers/DashContainer';
import DashLayout from 'layouts/Dash/Dash';
import StudentDashContainer from './containers/StudentDashContainer';

export const makeDashRoutes = () => {
  return (
    <Route path='/dashboard' component={DashLayout}>
      <IndexRoute component={StudentDashContainer} />
      <Route path='student' component={StudentDashContainer}/>
    </Route>
  );
};

export default makeDashRoutes;
