import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from './styles.module.css';
import * as authActions from '../ducks/auth.js';
import { Link } from 'react-router';

class SignInContainer extends Component {

  constructor(props) {
    super(props);
    // console.log("IMPORT ONE: ", handleSignIn())
    // console.log("PROPS ONE: ", this.props.handleSignIn.bind(null, 7)())
  };

  handleSignIn() {

    const username = this.refs.username.value.trim();
    const password = this.refs.password.value.trim();

    this.props.handleUser('login', username, password);

    this.refs.username.value = '';
    this.refs.password.value= '';

  }

  handleGuest() {

    const username = this.refs.username.value.trim();
    const password = this.refs.password.value.trim();

    this.props.handleGuest();

    this.refs.username.value = '';
    this.refs.password.value= '';

  }


	render() {
		return (
			<div className={styles.form}>
				<h1>Welcome to Fish Academy &gt;&lt;&gt;</h1>


        <label>Username:</label>
        <input ref="username" type="text" name="username"/>

        <label>Password:</label>
        <input ref="password" type="password" name="password"/>



        <button onClick={ () => {this.handleSignIn()} }> Sign In </button>
        <button onClick={ () => {this.handleGuest()} }> Guest </button>

        <Link to='/signup'> Go to Sign Up </Link> <br/>

        <Link to='/course/create'> Go to course </Link> 

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