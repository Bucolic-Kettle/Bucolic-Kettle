import React, { PropTypes } from 'react';
import Header from 'components/Header/Header';
import styles from './styles.module.css';

function SearchResultsLayout({ children }) {
  return (
    <div className="container-fluid">
      {/*<Header />*/}
      <div className="jumbotron">
        <h1>Search Results</h1>
      </div>
      <div className="row-fluid">
        {children}
      </div>
    </div>
  );
}

SearchResultsLayout.propTypes = {
  children: PropTypes.node,
};

export default SearchResultsLayout;
