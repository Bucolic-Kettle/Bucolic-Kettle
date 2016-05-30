import React from 'react';
import { Route } from 'react-router';
import Auth from 'containers/AuthContainer';
import CourseLayout from 'layouts/Course/Course';
import CreateCourseContainer from './containers/CreateCourseContainer';

export const makeCourseRoutes = () => {
  return (
    <Route path="/course" component={CourseLayout}>
      <Route path="create" component={CreateCourseContainer} />
    </Route>
  );
};

export default makeCourseRoutes;
