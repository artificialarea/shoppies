import React from 'react';
import { shallow } from 'enzyme';
import ResultList from './ResultList';

describe('ResultList', () => {
    it('should render the component', () => {
        const wrapper = shallow(<ResultList />);
        expect(wrapper.find('.result-list').exists()).toBe(true);
    });
});