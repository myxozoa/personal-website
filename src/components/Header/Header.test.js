import React from 'react';
import { shallow } from 'enzyme';

import Component from './index';

describe('<Header />', () => {
  it('renders correctly', () => {
    const component = shallow(<Component location={{ pathname: '' }}/>);

    expect(component).toMatchSnapshot();
  });
});