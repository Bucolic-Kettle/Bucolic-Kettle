import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import CoreLayout from './layouts/Core';
import SignUp from './components/SignUp';

export default (store) => {
  return (
    <Route path="/" component={CoreLayout}>
      <IndexRedirect to="/signup" />
      <Route path="/signup" component={SignUp} />
    </Route>
  )
}
