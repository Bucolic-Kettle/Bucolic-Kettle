import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Sidebar from 'components/Sidebar/Sidebar';
import { CreateCourseFormFirstPage } from '../';
import { CreateCourseFormSecondPage } from '../';
import { CreateCourseFormThirdPage } from '../';
import { save } from '../../ducks/createCourse';

import styles from './styles.module.css';

export class CreateCourseForm extends React.Component {
  constructor(props) {
    super(props);

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.submitCourse = this.submitCourse.bind(this);
    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }
  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  submitCourse(params) {
    this.props.save(params);
  }

  render() {
    const { page } = this.state;
    return (
      <div className={styles.form}>
        <div className={styles.header}>Create Your Course</div>
        {page === 1 && <CreateCourseFormFirstPage onSubmit={this.nextPage}/>}
        {page === 2 && <CreateCourseFormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 3 && <CreateCourseFormThirdPage previousPage={this.previousPage} onSubmit={this.props.save} />}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ save }, dispatch);

export default connect(undefined, mapDispatchToProps)(CreateCourseForm);
