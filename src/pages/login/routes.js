import React from 'react'
import {Route, IndexRoute} from 'react-router'
import LoginContainer from './containers/LoginContainer'

export const makeLoginRoutes = () => {
  return (
    <Route path="/" component={LoginContainer}>
    </Route>
  )
}

export default makeLoginRoutes
