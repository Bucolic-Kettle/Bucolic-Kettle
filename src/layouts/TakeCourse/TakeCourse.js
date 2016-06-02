import React, { PropTypes } from 'react';
import Header from 'components/Header/Header';
import styles from './styles.module.css';

function LandingLayout({ children }) {
  return (
    <div className="container-fluid">
      {/*<Header />*/}
      <div className="jumbotron"> 
        <h1>COURSE NAME ! &gt;&lt;&gt;</h1>
      </div>
      <div className="row-fluid">
        {children}
      </div>
    </div>
  );
}

LandingLayout.propTypes = {
  children: PropTypes.node,
};

export default LandingLayout;
