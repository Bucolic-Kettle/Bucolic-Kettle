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

      <div className="body">

        <div className="container text-center">

          <div className={styles.signin}>            
            <h2 className="form-signin-heading">Create an Account</h2>
            <input type="text" ref="username" name="username" className="form-control" placeholder="Username" required autofocus />
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" ref="password" name="password" className="form-control" placeholder="Password" required />
            {/*<div className="checkbox">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>*/}

            <br />

            <button className="btn btn-lg btn-primary btn-block" onClick={ () => {this.handleSignUp()} }>Sign up</button>
              
            <br/>

            <span> Have an account? <Link to='/'> Go to Sign In </Link> </span>

          </div>
        </div>

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