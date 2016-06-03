import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from '../styles.module.css';
import { Link } from 'react-router';
import Question from './Question.js';


class Questions extends Component {

  constructor(props) {
    super(props);
  };


  render() {

    return (

      <div>

        <span> {this.props.text} </span>
        <form>
          {this.props.question.map( (option, i) => ( 
            <Question key={i} id={this.props.id} option={option}/> )
          )}
        </form> 
        <br />
      </div>


    )
  }
}

// function mapStateToProps(state) {

//   return {
//     display: state.takeCourse.display,
//     courseName: state.takeCourse.courseName,
//     courseDescription: state.takeCourse.courseDescription,
//     courseUrl: state.takeCourse.courseUrl,
//     courseQuestions: state.takeCourse.courseQuestions
//   }

// }

// // function mapDispatchToProps(dispatch) {
// //   var aa = {handleSignIn: handleSignIn};
// //   console.log('action creator', aa)
// //   return bindActionCreators(aa, dispatch);
// // }

export default Questions;

