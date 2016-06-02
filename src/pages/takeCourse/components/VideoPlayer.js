import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'


const VideoPlayer = (props) => {
  return (

    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={props.courseUrl} allowFullScreen></iframe>
      </div>
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

export default connect(mapStateToProps)(VideoPlayer);