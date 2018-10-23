import React from 'react';
import { shallow } from 'enzyme';

import Waves from '../Waves';
import App from './index';

describe('<App />', () => {
  it('renders the Waves component', () => {
    const app = shallow(<App />);

    expect(app.find(Waves)).toHaveLength(1);
  });
});