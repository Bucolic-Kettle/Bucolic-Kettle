import React, { PropTypes } from 'react';
import Header from 'components/Header/Header';
import styles from './styles.module.css';
import { connect } from 'react-redux'


function LandingLayout(props) {
  console.log(props)
  return (
    <div className="container-fluid">
      <Header />
      <div className={`${styles.course} page-header`}> 
        <h1>{props.courseName} ! &gt;&lt;&gt;</h1>
      </div>
      <div className="row-fluid">
        {props.children}
      </div>
    </div>
  );
}

LandingLayout.propTypes = {
  children: PropTypes.node,
};

function mapStateToProps(state) {

  return {
    courseName: state.takeCourse.courseName, 
  }

}

export default connect(mapStateToProps)(LandingLayout);
