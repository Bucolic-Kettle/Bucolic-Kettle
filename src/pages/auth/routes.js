import React from 'react'
import {Route, IndexRoute} from 'react-router'
import LandingLayout from 'layouts/Landing/Landing'
import SignInContainer from './containers/SignInContainer'

export const makeAuthRoutes = () => {
  return (
    <Route path="/" component={LandingLayout}>
    	<IndexRoute component={SignInContainer} />
    	<Route path="signin" component={SignInContainer} />
    </Route>
  )
}

export default makeAuthRoutes
