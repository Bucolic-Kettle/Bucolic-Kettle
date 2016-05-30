import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import CourseLayout from './Course'
import styles from './styles.module.css'

describe('<CourseLayout />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CourseLayout />)
  });

  it('Should render as a <div>', () => {
    expect(wrapper.type()).to.eql('div');
  });

});
