import React, { PropTypes } from 'react';  
import { connect } from 'react-redux';  
import { push } from 'react-router-redux';

export default (Component) => {  
  class AuthenticatedComponent extends React.Component {
    static propTypes = {
      user: PropTypes.object,
      dispatch: PropTypes.func.isRequired
    };

    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
      const { dispatch } = this.props;
console.log(this.props.state.auth.auth)
      if (!this.props.state.auth.auth) {
        dispatch(push('/'));
        // dispatch(push('/signin'));
      }
    }

    render() {
      return (
        <div className="authenticated">
          { this.props.state.auth.auth ? <Component {...this.props} /> : null }
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      state: state
    };
  };

  return connect(mapStateToProps)(AuthenticatedComponent);
}