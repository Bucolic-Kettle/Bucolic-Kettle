import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Auth from 'containers/AuthContainer'
import CourseLayout from 'layouts/Course/Course'
import CreateCourseContainer from './containers/CreateCourseContainer'
import StudyCourseContainer from './containers/StudyCourseContainer'

export const makeCourseRoutes = () => {
  return (
    <Route path="/course" component={Auth(CourseLayout)}>
    	<Route path="create" component={CreateCourseContainer} />
    	<Route path=":id" component={StudyCourseContainer} />
    </Route>
  )
}

export default makeCourseRoutes
