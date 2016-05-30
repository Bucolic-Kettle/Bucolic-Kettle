import React, { PropTypes } from 'react';
import Sidebar from 'components/Sidebar/Sidebar';

import styles from './styles.module.css';

export class CreateCourseForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Sidebar />
          <QuestionCanvas />
        </form>
      </div>
    );
  }
}
