import React from 'react';
import { shallow } from 'enzyme';
import EndGame from './EndGame';

describe('<EndGame />', () => {
    it('should render the component', () => {
        const wrapper = shallow(<EndGame />);
        expect(wrapper.find('.end-game').exists()).toBe(true);
    });
});
