import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import styles from './styles.module.css';
import * as authActions from '../../ducks/auth.js';
import { Link } from 'react-router';

class SignInContainer extends Component {

  constructor(props) {
    super(props);
    // console.log("IMPORT ONE: ", handleSignIn())
    // console.log("PROPS ONE: ", this.props.handleSignIn.bind(null, 7)())
  };

  handleSignUp() {

    const username = this.refs.username.value.trim();
    const password = this.refs.password.value.trim();

  // *****  this.props.handleSignIn(username, password);

    this.refs.username.value = '';
    this.refs.password.value= '';

  }

  render() {
    return (
      <div>
        <h1>Welcome to Fish Academy &gt;&lt;&gt; Sign up here</h1>


        <label>Username:</label>
        <input ref="username" type="text" name="username"/>

        <label>Password:</label>
        <input ref="password" type="password" name="password"/>

        <Link to='/'> Go to login </Link> 

      </div>


    )
  }
}

function mapStateToProps(state) {

  return {
    auth: state.auth
  }

}

// function mapDispatchToProps(dispatch) {
//   var aa = {handleSignIn: handleSignIn};
//   console.log('action creator', aa)
//   return bindActionCreators(aa, dispatch);
// }

export default connect(mapStateToProps, authActions)(SignInContainer);


// this.props.handleSignIn.bind(null, 7)}