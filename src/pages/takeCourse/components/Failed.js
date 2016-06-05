import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './styles.module.css';



const Description = (props) => {
  return (

    <div className={styles.main}>
      <p>Im Sorry, you did not pass. Feel free to review the course and take the quiz again. Best of luck</p>
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