import { reduxForm } from 'redux-form';
import { CreateCourseForm } from '../components';

const fields = [
  'name',
  'course.videoUrl',
  'course.questions[].type',
  'course.questions[].options[]'
];

export default reduxForm({
  fields,
  name: 'createCourse'
})(CreateCourseForm);
