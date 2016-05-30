import React, { PropTypes } from 'react';
import Header from 'components/Header/Header';
import styles from './styles.module.css';

function CourseLayout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

CourseLayout.propTypes = {
  children: PropTypes.node,
};

export default CourseLayout;
