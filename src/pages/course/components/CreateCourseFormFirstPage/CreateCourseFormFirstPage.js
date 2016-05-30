import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { VideoUrlInput } from '../';

export const fields = [ 'course.videoUrl' ];

export class CreateCourseFormFirstPage extends Component {
  render() {
    const { fields: { course }, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Video Url</label>
          <div>
            <VideoUrlInput field={course.videoUrl} />
          </div>
        </div>
        <div>
          <button type="submit">
            Next <i/>
          </button>
        </div>
      </form>
    );
  }
}

CreateCourseFormFirstPage.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'createCourse',
  fields,
  destroyOnUnmount: false,
})(CreateCourseFormFirstPage);
