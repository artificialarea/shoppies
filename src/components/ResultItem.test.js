import React from 'react';
import { shallow } from 'enzyme';
import ResultItem from './ResultItem';

describe('<ResultItem />', () => {
    it('should render the component', () => {
        const wrapper = shallow(<ResultItem />);
        expect(wrapper.find('.result-item').exists()).toBe(true);
    });
});