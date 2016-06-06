import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import styles from './styles.module.css';
import { Link } from 'react-router';
// import BadgesList from '../components/BadgesList';
// import CoursesList from '../components/CoursesList';
import DashList from '../components/DashList';


const badgesExampleData = [
  {
    index: 0,
    id: 0,
    title: 'Educated',
    description: 'Complete a course.',
    completed: true,
    icon: '🎖',
    type: 'badge'
  },
  {
    index: 1,
    id: 1,
    title: 'Educator',
    description: 'Make a course.',
    completed: false,
    icon: '🎖',
    type: 'badge'
  }
];


const coursesExampleData = [
  {
    index: 0, // index of item in list
    id: 0, // Course ID
    title: 'How to Shot Web',
    description: 'At one point, you may have asked yourself "How do I shot web?" Well, ...',
    completed: true,
    icon: '🕸',
    type: 'course'
  },
  {
    index: 1,
    id: 123,
    title: 'Example Course',
    description: 'Just a test.',
    completed: false,
    icon: '📝',
    type: 'course'
  }
];


class StudentDashContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Student Dashboard!</h2>

        <div className='col-md-6'>
          <h4>Badges</h4>
          <DashList data={badgesExampleData} header='Badges'/>
        </div>
        <div className='col-md-6'>
          <h4>Courses</h4>
          <DashList data={coursesExampleData} header='Courses'/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    // ???
  }
}

export default /*connect(mapStateToProps)(*/StudentDashContainer/*)*/;