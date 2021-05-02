import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search', () => {
    it('should render the component', () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.find('.search').exists()).toBe(true);
    });
});