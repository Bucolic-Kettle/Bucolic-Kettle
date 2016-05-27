import React from 'react'
import {browserHistory, Router, Route, Redirect} from 'react-router'

import makeLoginRoutes from './pages/login/routes'

export const makeRoutes = () => {
  const login = makeLoginRoutes();

  return (
    <Route path=''>
      {login}
    </Route>
  )
}



export default makeRoutes
