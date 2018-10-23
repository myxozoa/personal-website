import React from 'react';
import { shallow, render } from 'enzyme';
import { Link } from '@reach/router';

import App from '../App';
import Navigation from './index';

describe('<App />', () => {
  it('renders one nav tag', () => {
    const component = shallow(<Navigation />);

    expect(component.find('nav')).toHaveLength(1);
  });

  it('renders 3 Links', () => {
    const component = shallow(<Navigation />);

    expect(component.find('nav').children()).toHaveLength(3);
    expect(component.find('nav').children().every(Link)).toEqual(true);
  });
});