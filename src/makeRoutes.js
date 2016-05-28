import React from 'react'
import {browserHistory, Router, Route, Redirect} from 'react-router'
import { makeAuthRoutes } from './pages/auth/routes'

export const makeRoutes = () => {
  const auth = makeAuthRoutes();
  
  return (
    <Route path=''>
      {auth}
    </Route>
  )
}



export default makeRoutes
