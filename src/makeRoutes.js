import React from 'react';
import {browserHistory, Router, Route, Redirect} from 'react-router';
import { makeAuthRoutes } from './pages/auth/routes';
import { makeCourseRoutes } from './pages/course/routes';
import { makeTakeCourseRoutes } from './pages/takeCourse/routes';

export const makeRoutes = () => {
  const auth = makeAuthRoutes();
  const course = makeCourseRoutes();
  const TakeCourse = makeTakeCourseRoutes();
  
  return (
    <Route path=''>
      {auth}
      {course}
      {TakeCourse}
    </Route>
  )
}



export default makeRoutes;
