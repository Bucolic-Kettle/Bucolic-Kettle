import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './styles.module.css';



const Description = (props) => {
  return (

    <div className={styles.main}>
      <p>Congratulations ! You Passed. {props.courseName} has been added to your list of completed courses </p>
    </div>    
    )
  
}

function mapStateToProps(state) {

  return {
    courseName: state.takeCourse.courseName, 
    courseDescription: state.takeCourse.courseDescription,
    courseUrl: state.takeCourse.courseUrl,
    courseQuestions: state.takeCourse.courseQuestions
  }

}

// function mapDispatchToProps(dispatch) {
//   var aa = {handleSignIn: handleSignIn};
//   console.log('action creator', aa)
//   return bindActionCreators(aa, dispatch);
// }

export default connect(mapStateToProps)(Description);