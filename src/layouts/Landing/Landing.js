import React, { PropTypes } from 'react';
import Header from 'components/Header/Header';
import styles from './styles.module.css';

function LandingLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

LandingLayout.propTypes = {
  children: PropTypes.node,
};

export default LandingLayout;
