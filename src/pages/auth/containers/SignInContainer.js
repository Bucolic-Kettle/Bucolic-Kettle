import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class SignInContainer extends Component {
	render() {
		return (
			<div>
				Hello Dan
			</div>
		)
	}
}

export default connect()(SignInContainer);
