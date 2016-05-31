import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from './styles.module.css';
import * as authActions from '../ducks/auth.js';
import { Link } from 'react-router';

class SignUpContainer extends Component {

  constructor(props) {
    super(props);
    // console.log("IMPORT ONE: ", handleSignIn())
    // console.log("PROPS ONE: ", this.props.handleSignIn.bind(null, 7)())
  };

  handleSignUp() {

    const username = this.refs.username.value.trim();
    const password = this.refs.password.value.trim();

    this.props.handleUser('signup', username, password);

    this.refs.username.value = '';
    this.refs.password.value= '';

  }

  render() {
    return (

      <div className={styles.form}>
        <h1>Create an Account ! &gt;&lt;&gt;</h1>


        <label>Username:</label>
        <input ref="username" type="text" name="username"/>

        <label>Password:</label>
        <input ref="password" type="password" name="password"/>



        <button onClick={ () => {this.handleSignUp()} }> Sign Up </button>

        <Link to='/'> Go to Sign In </Link> 

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

export default connect(mapStateToProps, authActions)(SignUpContainer);


// this.props.handleSignIn.bind(null, 7)}