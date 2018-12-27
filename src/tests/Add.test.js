import React from 'react';
import {shallow} from 'enzyme';
import Add from '../components/Add';
import './config';

describe('<Add />', () => {
  
  test('should display "Add" panel', () => {
    let wrapper = shallow(<Add />);
    // expect(wrapper.find('add').Add).toBe('table2')
    
  });
});