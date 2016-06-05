import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// Add dumy data from sample.js
// import sample from '../../../../sample';

const Results = (props) => {

  return (
    <div>
      <ul className="list-group">
        {props.results.map(course =>
          <li className="list-group-item">
            <div>
              <h3>Name: {course.title}</h3>
              <p>ID: {course.id}</p>
              <p>Description: {course.description}</p>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {

  return {
    results: state.search.results
  }

}

// function mapDispatchToProps(dispatch) {
//   var aa = {handleSignIn: handleSignIn};
//   console.log('action creator', aa)
//   return bindActionCreators(aa, dispatch);
// }

export default connect(mapStateToProps)(Results);
