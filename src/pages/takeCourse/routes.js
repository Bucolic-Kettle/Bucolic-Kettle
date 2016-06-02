import React from 'react';
import { Route } from 'react-router';
import Auth from 'containers/AuthContainer';
import TakeCourseLayout from 'layouts/TakeCourse/TakeCourse';
import TakeCourseContainer from './containers/TakeCourseContainer';


export const makeTakeCourseRoutes = () => {
  return (

    <Route path="/take" component={TakeCourseLayout}>
    {/*<Route path="/course" component={Auth(CourseLayout)}>*/}

      <Route path=":courseId" component={TakeCourseContainer} />

    </Route>
  );
};

export default makeTakeCourseRoutes;
