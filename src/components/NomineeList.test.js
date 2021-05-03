import React from 'react';
import { shallow } from 'enzyme';
import NomineeList from './NomineeList';

describe('NomineeList', () => {
    it('should render the component', () => {
        const wrapper = shallow(<NomineeList />);
        expect(wrapper.find('.nominee-list').exists()).toBe(true);
    });
});