import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import LandingLayout from './Landing'
import styles from './styles.module.css'

describe('<LandingLayout />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LandingLayout />)
  });

  it('Should render as a <div>', () => {
    expect(wrapper.type()).to.eql('div');
  });

});
