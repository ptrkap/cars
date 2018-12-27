import React from 'react';
import {shallow} from 'enzyme';
import {Add} from '../components/Add';
import './config';

describe('<Add />', () => {
  
  test('should display "Add" panel', () => {
    const wrapper = shallow(<Add />);
    expect(wrapper.props().id).toBe("add");
    expect(wrapper.type()).toBe("div");
    expect(wrapper.childAt(0).type()).toBe("table");
    expect(wrapper.childAt(0).childAt(0).type()).toBe("thead");
    expect(wrapper.childAt(0).childAt(0).childAt(0).type()).toBe("tr");
    expect(wrapper.childAt(0).childAt(0).childAt(0).childAt(0).type()).toBe("th");
    const th = wrapper.childAt(0).childAt(0).childAt(0);
    expect(th.childAt(0).childAt(0).type()).toBe("input");
    expect(th.childAt(0).childAt(0).props().id).toBe("brandInput");
    expect(th.childAt(0).childAt(0).props().placeholder).toBe("Brand");
    expect(th.childAt(1).childAt(0).type()).toBe("input");
    expect(th.childAt(1).childAt(0).props().id).toBe("modelInput");
    expect(th.childAt(1).childAt(0).props().placeholder).toBe("Model");
    expect(th.childAt(2).childAt(0).type()).toBe("input");
    expect(th.childAt(2).childAt(0).props().id).toBe("powerInput");
    expect(th.childAt(2).childAt(0).props().placeholder).toBe("Power");
    expect(th.childAt(3).childAt(0).type()).toBe("input");
    expect(th.childAt(3).childAt(0).props().id).toBe("yearInput");
    expect(th.childAt(3).childAt(0).props().placeholder).toBe("Year");
    expect(th.childAt(4).childAt(0).type()).toBe("input");
    expect(th.childAt(4).childAt(0).props().id).toBe("priceInput");
    expect(th.childAt(4).childAt(0).props().placeholder).toBe("Price");
    expect(th.childAt(5).childAt(0).type()).toBe("img");
    expect(th.childAt(5).childAt(0).props().className).toBe("removeCar");
    expect(th.childAt(5).childAt(0).props().alt).toBe("removeCar");
  });
});