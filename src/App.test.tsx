import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// shallow unit test
// runs only on the rendered component, not in nested components
it('renders without crashing', () => {
  shallow(<App />);
});
