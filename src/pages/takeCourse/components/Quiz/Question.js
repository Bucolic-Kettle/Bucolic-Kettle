import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from '../styles.module.css';
import {handleAnswers} from '../../ducks/takeCourse.js'
import { bindActionCreators } from 'redux'



const Question = (props) => {

  let handleClick = (e) => {

    props.handleAnswers(e.target.id, e.target.value)

  }

  return (

    <div>

      <input type="radio" name="choice" value={props.option} id={props.id} onClick={(e)=>handleClick(e)} /> {props.option}<br />

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

function mapDispatchToProps(dispatch) {
  return {
    handleAnswers: bindActionCreators(handleAnswers, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Question);