import React from 'react';
import { Route } from 'react-router';
import Auth from 'containers/AuthContainer';
import SearchResultsLayout from 'layouts/SearchResults/SearchResults';
import SearchResultsContainer from './containers/SearchResultsContainer';


export const makeSearchResultsRoutes = () => {
  return (

    <Route path="/search" component={SearchResultsLayout} >
      <Route path="/search/results" component={SearchResultsContainer} />
    </Route>
  );
};

export default makeSearchResultsRoutes;
