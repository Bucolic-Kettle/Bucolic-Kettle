import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import PureInput from 'components/PureInput/PureInput';

export const fields = [ 'course.questions[].questionText', 'course.questions[].options[]' ];


export class CreateCourseFormSecondPage extends Component {
  render() {
    const { fields: { course }, handleSubmit, previousPage } = this.props;
    const { questions } = course;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <button type="button" onClick={() => {
            questions.addField()
            console.log('fields: ', fields);
          }}><i/> Add Question
          </button>
        </div>
        {questions.map((question, index) => <div key={index}>
          <div>
            <label>Question #{index + 1}</label>
            <div>
              <PureInput type="text" placeholder="Question Text" field={question.questionText} />
            </div>
            <div>
              <button type="button" onClick={() => {
                question.options.addField()
              }}><i/> Add Option
              </button>
              <div>
                <button type="button" disabled={index === 0} onClick={() => {
                  question.swapFields(index, index - 1)  // swap field with it's predecessor
                }}><i/>
                </button>
                <button type="button" disabled={index === questions.length - 1} onClick={() => {
                  question.swapFields(index, index + 1)  // swap field with it's successor
                }}><i/>
                </button>
              </div>
              <button type="button" onClick={() => {
                questions.removeField(index)  // remove from index
              }}><i/> Remove
              </button>
            </div>
          </div>
          {question.options.map((option, optionIndex) => <div key={optionIndex}>
            <div>
              <label>Option #{optionIndex + 1}</label>
              <div>
                <PureInput type="text" field={option} />
              </div>
              <div>
                <button type="button" onClick={() => {
                  question.options.removeField(optionIndex)
                }}><i/></button>
              </div>
            </div>
          </div>)}
        </div>)}
        <div>
          <button type="button" onClick={previousPage}>
            <i/> Previous
          </button>
          <button type="submit">
            Next <i/>
          </button>
        </div>
      </form>
    );
  }
}

CreateCourseFormSecondPage.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'createCourse',
  fields,
  destroyOnUnmount: false,
})(CreateCourseFormSecondPage);
