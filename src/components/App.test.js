import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {
    it('should render the component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App').exists()).toBe(true);
    });
});