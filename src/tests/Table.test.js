import React from 'react';
import {shallow} from 'enzyme';
import {Table} from '../components/Table';
import './config';

describe('<Table />', () => {

  test('Should display table header', () => {
    const cars = [];

    const wrapper = shallow(<Table cars={cars}/>);
    expect(wrapper.type()).toBe("table");
    expect(wrapper.props().id).toBe("carsTable");
    expect(wrapper.childAt(0).type()).toBe("thead");
    expect(wrapper.childAt(0).childAt(0).type()).toBe("tr");
    expect(wrapper.childAt(0).childAt(0).childAt(0).type()).toBe("th");

    expect(wrapper.childAt(0).childAt(0).childAt(0).childAt(0).type()).toBe("div");
    expect(wrapper.childAt(0).childAt(0).childAt(0).childAt(0).props().className).toBe("head");
    expect(wrapper.childAt(0).childAt(0).childAt(0).childAt(0).props().children).toBe("Brand");
    expect(wrapper.childAt(0).childAt(0).childAt(0).childAt(1).type()).toBe("img");
    expect(wrapper.childAt(0).childAt(0).childAt(0).childAt(1).props().className).toBe("sort");
    expect(wrapper.childAt(0).childAt(0).childAt(0).childAt(1).props().alt).toBe("sort");

    expect(wrapper.childAt(0).childAt(0).childAt(1).childAt(0).type()).toBe("div");
    expect(wrapper.childAt(0).childAt(0).childAt(1).childAt(0).props().className).toBe("head");
    expect(wrapper.childAt(0).childAt(0).childAt(1).childAt(0).props().children).toBe("Model");
    expect(wrapper.childAt(0).childAt(0).childAt(1).childAt(1).type()).toBe("img");
    expect(wrapper.childAt(0).childAt(0).childAt(1).childAt(1).props().className).toBe("sort");
    expect(wrapper.childAt(0).childAt(0).childAt(1).childAt(1).props().alt).toBe("sort");

    expect(wrapper.childAt(0).childAt(0).childAt(2).childAt(0).type()).toBe("div");
    expect(wrapper.childAt(0).childAt(0).childAt(2).childAt(0).props().className).toBe("head");
    expect(wrapper.childAt(0).childAt(0).childAt(2).childAt(0).props().children).toBe("Power");
    expect(wrapper.childAt(0).childAt(0).childAt(2).childAt(1).type()).toBe("img");
    expect(wrapper.childAt(0).childAt(0).childAt(2).childAt(1).props().className).toBe("sort");
    expect(wrapper.childAt(0).childAt(0).childAt(2).childAt(1).props().alt).toBe("sort");

    expect(wrapper.childAt(0).childAt(0).childAt(3).childAt(0).type()).toBe("div");
    expect(wrapper.childAt(0).childAt(0).childAt(3).childAt(0).props().className).toBe("head");
    expect(wrapper.childAt(0).childAt(0).childAt(3).childAt(0).props().children).toBe("Year");
    expect(wrapper.childAt(0).childAt(0).childAt(3).childAt(1).type()).toBe("img");
    expect(wrapper.childAt(0).childAt(0).childAt(3).childAt(1).props().className).toBe("sort");
    expect(wrapper.childAt(0).childAt(0).childAt(3).childAt(1).props().alt).toBe("sort");

    expect(wrapper.childAt(0).childAt(0).childAt(4).childAt(0).type()).toBe("div");
    expect(wrapper.childAt(0).childAt(0).childAt(4).childAt(0).props().className).toBe("head");
    expect(wrapper.childAt(0).childAt(0).childAt(4).childAt(0).props().children).toBe("Price");
    expect(wrapper.childAt(0).childAt(0).childAt(4).childAt(1).type()).toBe("img");
    expect(wrapper.childAt(0).childAt(0).childAt(4).childAt(1).props().className).toBe("sort");
    expect(wrapper.childAt(0).childAt(0).childAt(4).childAt(1).props().alt).toBe("sort");
  });

  test('Should display table content', () => {

    const cars = [{
      id: -1,
      brand: "brand1",
      model: "model1",
      power: 12,
      year: 1999,
      price: 23000
    }];


  });
});
