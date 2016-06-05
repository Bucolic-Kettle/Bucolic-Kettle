import React from 'react'
import {Link} from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styles from './styles.module.css';
import { handleSignOut } from '../../pages/auth/ducks/auth.js';
import { search } from '../../redux/ducks/search.js'
import { showAll } from '../../redux/ducks/search.js'

export class Header extends React.Component {
  
  handleSearch() {

    let query = this.refs.searchText.value;

    this.refs.searchText.value = '';

    this.props.search(this.props.dispatch, query);
  }

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
          <li className="nav-item">
            <Link to='/search/results' className="nav-link" onClick={ ()=> this.props.showAll(this.props.dispatch) }> View Courses </Link>
          </li>
        </ul>
        <div className="form-inline pull-xs-right">
          <input className="form-control" type="text" ref="searchText" placeholder="Search" />
          <button className="btn btn-success" onClick={ () => this.handleSearch() }>Search</button>
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
    handleSignOut: bindActionCreators(handleSignOut, dispatch),
    search: bindActionCreators(search, dispatch),
    showAll: bindActionCreators(showAll, dispatch),
    dispatch
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header)

//http://v4-alpha.getbootstrap.com/components/navbar/

      // <div classNameNameName={styles.topbar}>
      //   <section>
      //     Fish Academy
      //   </section>
      // </div>
