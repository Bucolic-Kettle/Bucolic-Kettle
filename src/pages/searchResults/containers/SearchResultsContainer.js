import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from './styles.module.css';
import { Link } from 'react-router';
// import Sidebar from '../components/Sidebar.js';
// import VideoPlayer from '../components/VideoPlayer.js';
// import Description from '../components/Description.js';
// import Quiz from '../components/Quiz.js';
import Results from '../components/Results.js';

class SearchResultsContainer extends Component {

  constructor(props) {
    super(props);
  };


  render() {

    return (

      <div className="container-fluid">
        <div className="row-fluid">
          {/*<div className="col-sm-10 col-sm-offset-1">*/}


            <div className="col-sm-10">

              <Results />


            </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {

  return {
    display: state.takeCourse.display,
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

export default connect(mapStateToProps)(SearchResultsContainer);
