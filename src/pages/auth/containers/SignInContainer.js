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

	render() {
		return (
			<div className={styles.form}>
				<h1>Welcome to Fish Academy &gt;&lt;&gt;</h1>
        <button onClick={ () => {this.props.handleSignIn(true) } }> Sign In </button>
        <button> Guest </button>

        <Link to='/'> Go to course creation </Link> 

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