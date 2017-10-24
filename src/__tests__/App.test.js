import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';
import App from '../App';

it('renders without crashing', () => {
  shallow(<App />);
});
