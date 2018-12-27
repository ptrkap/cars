import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';
import './config';

describe('<App />', () => {

  test('should display app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.childAt(0).type()).toBe("h2");
    expect(wrapper.childAt(0).props().id).toBe("title");
    expect(wrapper.childAt(1).name()).toBe("Connect(Add)");
    expect(wrapper.childAt(2).type()).toBe("br");
    expect(wrapper.childAt(3).name()).toBe("Connect(Table)");
  });
});