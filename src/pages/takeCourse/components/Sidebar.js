import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from './styles.module.css';
import { Link } from 'react-router';
import * as courseActions from '../ducks/takeCourse.js';

class Sidebar extends Component {

  constructor(props) {
    super(props);
  };


  render() {
    return (

      <div >
        <div >
            <ul className={styles['sidebar-nav']}>
              <li>
                <a href="#" onClick={ 
                  (e) => {e.preventDefault(); this.props.handleDescription()} }> 
                  Description 
                </a>
              </li>
              <li>
                <a href="#" onClick={ 
                  (e) => {e.preventDefault(); this.props.handleVideo();} }> 
                    Video
                </a>
              </li>
              <li>
                <a href="#" onClick={ 
                  (e) => {e.preventDefault();} }> 
                  Quiz
                </a>
              </li>
            </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {

  return {
    username: state.auth.username
  }

}

// function mapDispatchToProps(dispatch) {
//   var aa = {handleSignIn: handleSignIn};
//   console.log('action creator', aa)
//   return bindActionCreators(aa, dispatch);
// }

export default connect(mapStateToProps, courseActions)(Sidebar);