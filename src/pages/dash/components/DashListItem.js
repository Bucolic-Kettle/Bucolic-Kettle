import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import styles from './styles.module.css';
import { Link } from 'react-router';

var DashListItem = (props) => {
  let icon = props.data.badge;

  if (props.data.type === 'badge') {
    if (!props.data.completed) {
      icon = '🔒';
    }
  } else if (props.data.type === 'course') {
    if (props.data.completed) {
      icon = '✓';
    }
  }

  return (
    <li className='list-group-item'>
      <h4><strong>{icon}</strong> {props.data.title}</h4>
      <span>{props.data.description}</span>
    </li>
  );
};

function mapStateToProps(state) {

  return {
    // ???
  };
}

export default /*connect(mapStateToProps)(*/DashListItem/*)*/;