import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


class SignUp extends Component {

	render() {
		return (
		  <div className="">
		    Hello World
		  </div>
		)
	}
}

SignUp.propTypes = {

}

function mapStateToProps(state) {
	return {
		state: state
	}
};

export default connect(mapStateToProps)(SignUp)