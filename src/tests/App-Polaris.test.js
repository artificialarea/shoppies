import React from 'react';
import {Page} from '@shopify/polaris';

import App from '../components/App';

import {mountWithAppProvider} from './utils/enzyme';

// Sample test to demonstrate how you should test with AppProvider context
test.skip('renders page', () => {
  const wrapper = mountWithAppProvider(<App />);
  expect(wrapper.find(Page).exists()).toBe(true);
});
