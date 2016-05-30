import React, { PropTypes } from 'react';
// import Sidebar from 'components/Sidebar/Sidebar';
import { CreateCourseFormFirstPage } from '../';
import { CreateCourseFormSecondPage } from '../';
import { CreateCourseFormThirdPage } from '../';

import styles from './styles.module.css';

export class CreateCourseForm extends React.Component {
  constructor(props) {
    super(props);

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
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
  render() {
    const { page } = this.state;
    return (
      <div className={styles.form}>
        <div className={styles.header}>Create Your Course</div>
        {page === 1 && <CreateCourseFormFirstPage onSubmit={this.nextPage}/>}
        {page === 2 && <CreateCourseFormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 3 && <CreateCourseFormThirdPage previousPage={this.previousPage} onSubmit={onSubmit}/>}
      </div>
    );
  }
}

export default CreateCourseForm;
