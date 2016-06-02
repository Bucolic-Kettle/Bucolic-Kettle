import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from './styles.module.css';
import { Link } from 'react-router';
import Sidebar from '../components/Sidebar.js';
import VideoPlayer from '../components/VideoPlayer.js';


class TakeCourseContainer extends Component {

  constructor(props) {
    super(props);
  };


  render() {
    return (

      <div className="container-fluid">
        <div className="row-fluid">
          {/*<div className="col-sm-10 col-sm-offset-1">*/}

            <div className="col-sm-2">
              <Sidebar />
            </div>


            <div className="col-sm-10">
            
              {this.props.username}
              <VideoPlayer />

            </div>
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

export default connect(mapStateToProps)(TakeCourseContainer);

