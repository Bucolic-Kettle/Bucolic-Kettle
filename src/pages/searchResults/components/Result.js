import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { setCourse } from '../../takeCourse/ducks/takeCourse'
import { bindActionCreators } from 'redux'
// Add dumy data from sample.js
// import sample from '../../../../sample';

const Result = (props) => {

  let handleSelect = (e) => {
    // console.log('setting', props.course)


    // answers are in props, this is a problem because they show up in react dev tools
    // resolve later (put in store?)
    // might not need to do all this, but object does have more than state needs?
    var coursePayload = { 
      courseName: props.course.title,
      courseDescription: props.course.description,
      courseUrl: props.course.url,
      courseQuestions: props.course.questions,
      courseAnswers: props.course.answers
    }

    props.setCourse(coursePayload);
    
  }


  return (
    <div>
      <li className="list-group-item">
        <div>
          <h3>Name: <Link to={`/take/${props.course.id}`}  onClick={ (e)=> handleSelect(e) }> {props.course.title} </Link> </h3>
          <p>ID: {props.course.id}</p>
          <p>Description: {props.course.description}</p>
        </div>
      </li>
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

function mapDispatchToProps(dispatch) {
  return {
    setCourse: bindActionCreators(setCourse, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
