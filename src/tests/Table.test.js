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

    expect(wrapper.childAt(0).childAt(0).childAt(1).type()).toBe("th");
    expect(wrapper.childAt(0).childAt(0).childAt(1).childAt(0).type()).toBe("div");
    expect(wrapper.childAt(0).childAt(0).childAt(1).childAt(0).props().className).toBe("head");
    expect(wrapper.childAt(0).childAt(0).childAt(1).childAt(0).props().children).toBe("Model");
    expect(wrapper.childAt(0).childAt(0).childAt(1).childAt(1).type()).toBe("img");
    expect(wrapper.childAt(0).childAt(0).childAt(1).childAt(1).props().className).toBe("sort");
    expect(wrapper.childAt(0).childAt(0).childAt(1).childAt(1).props().alt).toBe("sort");

    expect(wrapper.childAt(0).childAt(0).childAt(2).type()).toBe("th");
    expect(wrapper.childAt(0).childAt(0).childAt(2).childAt(0).type()).toBe("div");
    expect(wrapper.childAt(0).childAt(0).childAt(2).childAt(0).props().className).toBe("head");
    expect(wrapper.childAt(0).childAt(0).childAt(2).childAt(0).props().children).toBe("Power");
    expect(wrapper.childAt(0).childAt(0).childAt(2).childAt(1).type()).toBe("img");
    expect(wrapper.childAt(0).childAt(0).childAt(2).childAt(1).props().className).toBe("sort");
    expect(wrapper.childAt(0).childAt(0).childAt(2).childAt(1).props().alt).toBe("sort");

    expect(wrapper.childAt(0).childAt(0).childAt(3).type()).toBe("th");
    expect(wrapper.childAt(0).childAt(0).childAt(3).childAt(0).type()).toBe("div");
    expect(wrapper.childAt(0).childAt(0).childAt(3).childAt(0).props().className).toBe("head");
    expect(wrapper.childAt(0).childAt(0).childAt(3).childAt(0).props().children).toBe("Year");
    expect(wrapper.childAt(0).childAt(0).childAt(3).childAt(1).type()).toBe("img");
    expect(wrapper.childAt(0).childAt(0).childAt(3).childAt(1).props().className).toBe("sort");
    expect(wrapper.childAt(0).childAt(0).childAt(3).childAt(1).props().alt).toBe("sort");

    expect(wrapper.childAt(0).childAt(0).childAt(4).type()).toBe("th");
    expect(wrapper.childAt(0).childAt(0).childAt(4).childAt(0).type()).toBe("div");
    expect(wrapper.childAt(0).childAt(0).childAt(4).childAt(0).props().className).toBe("head");
    expect(wrapper.childAt(0).childAt(0).childAt(4).childAt(0).props().children).toBe("Price");
    expect(wrapper.childAt(0).childAt(0).childAt(4).childAt(1).type()).toBe("img");
    expect(wrapper.childAt(0).childAt(0).childAt(4).childAt(1).props().className).toBe("sort");
    expect(wrapper.childAt(0).childAt(0).childAt(4).childAt(1).props().alt).toBe("sort");

    expect(wrapper.childAt(0).childAt(0).childAt(5).type()).toBe("th");
    expect(wrapper.childAt(0).childAt(0).childAt(5).props().id).toBe("emptyBox");
  });

  test('Should display table content', () => {

    const cars = [{
      id: 1,
      brand: "Mazda",
      model: "RX8",
      power: 231,
      year: 2005,
      price: 23000
    },{
      id: 2,
      brand: "Opel",
      model: "Corsa",
      power: 45,
      year: 1994,
      price: 2000
    },{
      id: 3,
      brand: "Mercedes",
      model: "A168",
      power: 101,
      year: 2000,
      price: 5000
    }];

    const wrapper = shallow(<Table cars={cars} />);

    expect(wrapper.type()).toBe("table");
    expect(wrapper.props().id).toBe("carsTable");
    expect(wrapper.childAt(1).type()).toBe("tbody");
    expect(wrapper.childAt(1).children()).toHaveLength(3);

    expect(wrapper.childAt(1).childAt(0).type()).toBe("tr");
    expect(wrapper.childAt(1).childAt(0).childAt(0).type()).toBe("td");
    expect(wrapper.childAt(1).childAt(0).childAt(0).childAt(0).type()).toBe("input");
    expect(wrapper.childAt(1).childAt(0).childAt(0).childAt(0).props().id).toBe("brand1");
    expect(wrapper.childAt(1).childAt(0).childAt(0).childAt(0).props().defaultValue).toBe("Mazda");
    expect(wrapper.childAt(1).childAt(0).childAt(1).type()).toBe("td");
    expect(wrapper.childAt(1).childAt(0).childAt(1).childAt(0).type()).toBe("input");
    expect(wrapper.childAt(1).childAt(0).childAt(1).childAt(0).props().id).toBe("model1");
    expect(wrapper.childAt(1).childAt(0).childAt(1).childAt(0).props().defaultValue).toBe("RX8");
    expect(wrapper.childAt(1).childAt(0).childAt(2).type()).toBe("td");
    expect(wrapper.childAt(1).childAt(0).childAt(2).childAt(0).type()).toBe("input");
    expect(wrapper.childAt(1).childAt(0).childAt(2).childAt(0).props().id).toBe("power1");
    expect(wrapper.childAt(1).childAt(0).childAt(2).childAt(0).props().defaultValue).toBe(231);
    expect(wrapper.childAt(1).childAt(0).childAt(3).type()).toBe("td");
    expect(wrapper.childAt(1).childAt(0).childAt(3).childAt(0).type()).toBe("input");
    expect(wrapper.childAt(1).childAt(0).childAt(3).childAt(0).props().id).toBe("year1");
    expect(wrapper.childAt(1).childAt(0).childAt(3).childAt(0).props().defaultValue).toBe(2005);
    expect(wrapper.childAt(1).childAt(0).childAt(4).type()).toBe("td");
    expect(wrapper.childAt(1).childAt(0).childAt(4).childAt(0).type()).toBe("input");
    expect(wrapper.childAt(1).childAt(0).childAt(4).childAt(0).props().id).toBe("price1");
    expect(wrapper.childAt(1).childAt(0).childAt(4).childAt(0).props().defaultValue).toBe(23000);

    expect(wrapper.childAt(1).childAt(1).type()).toBe("tr");
    expect(wrapper.childAt(1).childAt(1).childAt(0).type()).toBe("td");
    expect(wrapper.childAt(1).childAt(1).childAt(0).childAt(0).type()).toBe("input");
    expect(wrapper.childAt(1).childAt(1).childAt(0).childAt(0).props().id).toBe("brand2");
    expect(wrapper.childAt(1).childAt(1).childAt(0).childAt(0).props().defaultValue).toBe("Opel");
    expect(wrapper.childAt(1).childAt(1).childAt(1).type()).toBe("td");
    expect(wrapper.childAt(1).childAt(1).childAt(1).childAt(0).type()).toBe("input");
    expect(wrapper.childAt(1).childAt(1).childAt(1).childAt(0).props().id).toBe("model2");
    expect(wrapper.childAt(1).childAt(1).childAt(1).childAt(0).props().defaultValue).toBe("Corsa");
    expect(wrapper.childAt(1).childAt(1).childAt(2).type()).toBe("td");
    expect(wrapper.childAt(1).childAt(1).childAt(2).childAt(0).type()).toBe("input");
    expect(wrapper.childAt(1).childAt(1).childAt(2).childAt(0).props().id).toBe("power2");
    expect(wrapper.childAt(1).childAt(1).childAt(2).childAt(0).props().defaultValue).toBe(45);
    expect(wrapper.childAt(1).childAt(1).childAt(3).type()).toBe("td");
    expect(wrapper.childAt(1).childAt(1).childAt(3).childAt(0).type()).toBe("input");
    expect(wrapper.childAt(1).childAt(1).childAt(3).childAt(0).props().id).toBe("year2");
    expect(wrapper.childAt(1).childAt(1).childAt(3).childAt(0).props().defaultValue).toBe(1994);
    expect(wrapper.childAt(1).childAt(1).childAt(4).type()).toBe("td");
    expect(wrapper.childAt(1).childAt(1).childAt(4).childAt(0).type()).toBe("input");
    expect(wrapper.childAt(1).childAt(1).childAt(4).childAt(0).props().id).toBe("price2");
    expect(wrapper.childAt(1).childAt(1).childAt(4).childAt(0).props().defaultValue).toBe(2000);

    expect(wrapper.childAt(1).childAt(2).type()).toBe("tr");
    expect(wrapper.childAt(1).childAt(2).childAt(0).type()).toBe("td");
    expect(wrapper.childAt(1).childAt(2).childAt(0).childAt(0).type()).toBe("input");
    expect(wrapper.childAt(1).childAt(2).childAt(0).childAt(0).props().id).toBe("brand3");
    expect(wrapper.childAt(1).childAt(2).childAt(0).childAt(0).props().defaultValue).toBe("Mercedes");
    expect(wrapper.childAt(1).childAt(2).childAt(1).type()).toBe("td");
    expect(wrapper.childAt(1).childAt(2).childAt(1).childAt(0).type()).toBe("input");
    expect(wrapper.childAt(1).childAt(2).childAt(1).childAt(0).props().id).toBe("model3");
    expect(wrapper.childAt(1).childAt(2).childAt(1).childAt(0).props().defaultValue).toBe("A168");
    expect(wrapper.childAt(1).childAt(2).childAt(2).type()).toBe("td");
    expect(wrapper.childAt(1).childAt(2).childAt(2).childAt(0).type()).toBe("input");
    expect(wrapper.childAt(1).childAt(2).childAt(2).childAt(0).props().id).toBe("power3");
    expect(wrapper.childAt(1).childAt(2).childAt(2).childAt(0).props().defaultValue).toBe(101);
    expect(wrapper.childAt(1).childAt(2).childAt(3).type()).toBe("td");
    expect(wrapper.childAt(1).childAt(2).childAt(3).childAt(0).type()).toBe("input");
    expect(wrapper.childAt(1).childAt(2).childAt(3).childAt(0).props().id).toBe("year3");
    expect(wrapper.childAt(1).childAt(2).childAt(3).childAt(0).props().defaultValue).toBe(2000);
    expect(wrapper.childAt(1).childAt(2).childAt(4).type()).toBe("td");
    expect(wrapper.childAt(1).childAt(2).childAt(4).childAt(0).type()).toBe("input");
    expect(wrapper.childAt(1).childAt(2).childAt(4).childAt(0).props().id).toBe("price3");
    expect(wrapper.childAt(1).childAt(2).childAt(4).childAt(0).props().defaultValue).toBe(5000);
  });
});
