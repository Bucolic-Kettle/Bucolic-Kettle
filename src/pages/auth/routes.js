import React from 'react'
import {Route, IndexRoute} from 'react-router'
import LandingLayout from 'layouts/Landing/Landing'
import SignInContainer from './containers/SignInContainer'
import SignUpContainer from './containers/SignUpContainer'
import unAuth from 'containers/UnAuthContainer';
// import SignInForm from './components/SignInForm/SignInForm'
// import SignUpForm from './components/SignUpForm/SignUpForm'

export const makeAuthRoutes = () => {
  return (
    <Route path="/" component={unAuth(LandingLayout)}>
    	<IndexRoute component={SignInContainer} />
      <Route path="signup" component={SignUpContainer} />  
    </Route>
  )
}

export default makeAuthRoutes
