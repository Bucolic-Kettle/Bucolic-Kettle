import React, { PropTypes } from 'react';
import Header from 'components/Header/Header';
import styles from './styles.module.css';

function Landing({ children }) {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

Landing.propTypes = {
  children: PropTypes.node,
};

export default Landing;
