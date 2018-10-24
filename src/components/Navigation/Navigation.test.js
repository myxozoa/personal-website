import React from 'react';
import { shallow } from 'enzyme';

import Component from './index';

describe('<Navigation />', () => {
  it('renders correctly', () => {
    const component = shallow(<Component />);

    expect(component).toMatchSnapshot();
  });
});