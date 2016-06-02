import React from 'react';
import {browserHistory, Router, Route, Redirect} from 'react-router';
import { makeAuthRoutes } from './pages/auth/routes';
import { makeCourseRoutes } from './pages/course/routes';
import { makeDashRoutes } from './pages/dash/routes';

export const makeRoutes = () => {
  const auth = makeAuthRoutes();
  const course = makeCourseRoutes();
  const dash = makeDashRoutes();
  
  return (
    <Route path=''>
      {auth}
      {course}
      {dash}
    </Route>
  )
}



export default makeRoutes;
