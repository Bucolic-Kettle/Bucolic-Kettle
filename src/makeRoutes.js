import React from 'react';
import { browserHistory, Router, Route, Redirect } from 'react-router';
import { makeAuthRoutes } from './pages/auth/routes';
import { makeCourseRoutes } from './pages/course/routes';
import { makeTakeCourseRoutes } from './pages/takeCourse/routes';
import { makeSearchResultsRoutes } from './pages/searchResults/routes';

export const makeRoutes = () => {
  const auth = makeAuthRoutes();
  const course = makeCourseRoutes();
  const TakeCourse = makeTakeCourseRoutes();
  const SearchResults = makeSearchResultsRoutes();

  return (
    <Route path="">
      {auth}
      {course}
      {TakeCourse}
      {SearchResults}
    </Route>
  )
}



export default makeRoutes;
