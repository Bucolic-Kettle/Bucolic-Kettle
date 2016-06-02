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

  handleTest() {
    this.props.handleTest();
  }


	render() {
		return (
			<div className="body">

        <div className="container">

          
          <h2 className="form-signin-heading">Please sign in</h2>
          <input type="text" ref="username" name="username" className="form-control" placeholder="Username" required autofocus />
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" ref="password" name="password" className="form-control" placeholder="Password" required />
          {/*<div className="checkbox">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>*/}
          <button className="btn btn-lg btn-primary btn-block" onClick={ () => {this.handleSignIn()} }>Sign in</button>
         
          <span> Test out the site? <a href="#" onClick={ (e) => {event.preventDefault(); this.handleGuest()} }> Guest Login </a> </span>
          
          <br/>  

          <span> Need an account ? <Link to='/signup'> Go to Sign Up </Link> </span>

        </div>

        <br/>
        <br/>

        <button onClick={ () => {this.handleTest()} }> TEST end point: logs out session </button>
        <Link to='take/123'> Test link to single course </Link>


        {/*<Link to='/course/take/123'> Go to a course </Link> <br/>

        <Link to='/course/create'> Go to course </Link> */}



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