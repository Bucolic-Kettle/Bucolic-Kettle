import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

export const fields = [ 'course.videoUrl', 'course.questions[].options[]', 'course.questions[].questionText' ];

export class CreateCourseFormThirdPage extends Component {
  render() {
    const { handleSubmit, previousPage, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <button type="button" disabled={submitting} onClick={previousPage}>
            <i/> Previous
          </button>
          <button type="submit" disabled={submitting}>
            {submitting ? <i/> : <i/>} Finish
          </button>
        </div>
      </form>
    )
  }
}

CreateCourseFormThirdPage.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'createCourse',
  fields,
  destroyOnUnmount: false,
})(CreateCourseFormThirdPage);
