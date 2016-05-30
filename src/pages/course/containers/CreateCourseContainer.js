import { connect } from 'react-redux';
import { CreateCourseForm } from '../components';

const fields = [
  'name',
  'course.videoUrl',
  'course.questions[].type',
  'course.questions[].options[]'
];

export default connect()(CreateCourseForm);
