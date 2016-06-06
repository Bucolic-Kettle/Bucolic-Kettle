import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import styles from './styles.module.css';
import DashListItem from './DashListItem';
import { Link } from 'react-router';

var DashList = (props) => {
  return (
    <div>
      <ul className='list-group'>
        {props.data.map((data, i) => {
          return (
            <DashListItem data={data} key={i} />
          );
        })}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {

  return {
    studentDash: state.studentDash
  };
}

export default connect(mapStateToProps)(DashList);