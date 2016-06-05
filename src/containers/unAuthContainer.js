import React, { PropTypes } from 'react';  
import { connect } from 'react-redux';  
import { push } from 'react-router-redux';

import axios from 'axios' //remove
import { bindActionCreators } from 'redux'
import {checkSession} from '../pages/auth/ducks/auth.js';


export default (Component) => {  
  class AuthenticatedComponent extends React.Component {
    // static propTypes = {
    //   user: PropTypes.object,
    //   dispatch: PropTypes.func.isRequired
    // };

    componentWillMount() {
      // send check to server
      // if there is a session populate state with that 
      // axios.get('http://localhost:8000/test', {withCredentials: true})
      console.log("login before", this.props.state.auth.login)
      this.props.checkSession();
      // this._checkAndRedirect();
      console.log('strange');
      console.log("login after:", this.props.state.auth.login)

    } 

    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
      //const { dispatch } = this.props;
// console.log(this.props.state.auth.login, this.props.state.auth.auth)
      if (!this.props.state.auth.login) {
        this.props.dispatch(push('/take/123'));
        // dispatch(push('/signin'));
      }
    }

    render() {
      return (
        <div className="authenticated">
          { this.props.state.auth.login ? <Component {...this.props} /> : null }
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      state: state
    };
  };

  function mapDispatchToProps(dispatch) {
    return {
      checkSession: bindActionCreators(checkSession, dispatch),
      dispatch: dispatch
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);
}