import React from 'react';
import {browserHistory, Router, Route, Redirect} from 'react-router';
import { makeAuthRoutes } from './pages/auth/routes';
import { makeCourseRoutes } from './pages/course/routes';

export const makeRoutes = () => {
  const auth = makeAuthRoutes();
  const course = makeCourseRoutes();
  
  return (
    <Route path=''>
      {auth}
      {course}
    </Route>
  )
}



export default makeRoutes;
