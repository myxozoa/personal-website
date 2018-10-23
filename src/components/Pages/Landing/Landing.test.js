import React from 'react';
import { shallow } from 'enzyme';

import Component from './index';

describe('<Landing />', () => {
  it('renders correctly', () => {
    const component = shallow(<Component />);

    expect(component).toMatchSnapshot();
  });
});