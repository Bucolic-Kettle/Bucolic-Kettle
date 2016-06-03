import React from 'react'
import {Link} from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styles from './styles.module.css';
import {handleSignOut} from '../../pages/auth/ducks/auth.js';

export class Header extends React.Component {
  render() {
    return (

     <nav className={`navbar navbar-light ${styles.mainNav}`}>
        <a className="navbar-brand" href="#">Fish Academy <br/> Hi, {this.props.username} </a>
        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <Link to='/take/1234' className="nav-link"> Dashboard <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to='' className="nav-link"> My Courses </Link>
          </li>
          <li className="nav-item">
            <Link to='/course/create' className="nav-link"> Create Course </Link>
          </li>
        </ul>
        <div className="form-inline pull-xs-right">
          <input className="form-control" type="text" placeholder="Search" />
          <button className="btn btn-success" type="submit">Search</button>
          <button onClick={() => this.props.handleSignOut()}>Logout</button>
        </div>
      </nav>

    )
  }
}

function mapStateToProps(state) {

  return {
    username: state.auth.username
  }

}

function mapDispatchToProps(dispatch) {
  return {
    handleSignOut: bindActionCreators(handleSignOut, dispatch)
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header)

//http://v4-alpha.getbootstrap.com/components/navbar/

      // <div classNameNameName={styles.topbar}>
      //   <section>
      //     Fish Academy
      //   </section>
      // </div>
