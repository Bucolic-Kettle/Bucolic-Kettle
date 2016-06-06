import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Result from './Result'
// Add dumy data from sample.js
// import sample from '../../../../sample';

const Results = (props) => {

  return (
    <div>
      <ul className="list-group">
        {props.results.map(course =>
          <Result course={course} />
        )}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {

  return {
    results: state.search.results,
    courseName: state.takeCourse.courseName,
    courseDescription:state.takeCourse.courseDescription, 
    courseUrl: state.takeCourse.courseUrl,
    courseQuestions: state.takeCourse.courseQuestions,
    courseAnswers:state.takeCourse.courseAnswers 
  }

}

// function mapDispatchToProps(dispatch) {
//   var aa = {handleSignIn: handleSignIn};
//   console.log('action creator', aa)
//   return bindActionCreators(aa, dispatch);
// }Link to={`/take/${course.id}`} 

export default connect(mapStateToProps)(Results);
