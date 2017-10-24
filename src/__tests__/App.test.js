import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';
import App from '../App';

it('renders without crashing', () => {
  shallow(<App />);
});

//I need to add more tests.
//I got on a roll making the app and ran out of time.
