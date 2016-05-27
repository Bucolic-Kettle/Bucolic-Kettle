import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class LoginContainer extends Component {
	render() {
		return (
			<div>
				Hello Dan
			</div>
		)
	}
}

export default connect()(LoginContainer);
