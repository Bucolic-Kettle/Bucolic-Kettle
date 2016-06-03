import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Questions from './Quiz/Questions';
import {handleSubmit} from '../ducks/takeCourse.js'
import { bindActionCreators } from 'redux'

const Quiz = (props) => {

  let handleSubmit = (e) => {

    e.target.disabled = true;
    // console.log('submitting')
    props.handleSubmit();

  }

  return (

    <div>
      {props.courseQuestions.map( (question, i) => ( 
        <Questions key={i} question={question.options} id={i} text={question.text}/> )
      )}

      <br/>

      <button className="btn btn-primary" onClick={(e)=>handleSubmit(e)}> Submit Quiz </button>

    </div>    
    )
  
}

function mapStateToProps(state) {

  return {
    courseName: state.takeCourse.courseName, 
    courseDescription: state.takeCourse.courseDescription,
    courseUrl: state.takeCourse.courseUrl,
    courseQuestions: state.takeCourse.courseQuestions,
    courseAnswers: state.takeCourse.courseAnswers
  }

}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: bindActionCreators(handleSubmit, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);