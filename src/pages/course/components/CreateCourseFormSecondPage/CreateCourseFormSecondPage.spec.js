import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { CreateCourseForm } from './CreateCourseForm';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { QuestionCanvas } from '../components/QuestionCanvas/QuestionCanvas';

describe('CreateCourseForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CreateCourseForm />);
  });
  it('should render Sidebar and QuestionCanvas', () => {
    expect(wrapper.containsAllMatchingElements([
      <Sidebar />,
      <QuestionCanvas />
    ])).to.equal(true);
  });
});
