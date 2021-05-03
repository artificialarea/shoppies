import React from 'react';
import { shallow } from 'enzyme';
import Nominee from './Nominee';

describe('Nominee', () => {
    it('should render the component', () => {
        const wrapper = shallow(<Nominee />);
        expect(wrapper.find('.nominee-item').exists()).toBe(true);
    });
});