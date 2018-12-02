import React, { Component } from 'react';
import Adder from './containers/Adder';
import Table from './containers/Table';

export default class App extends Component {
  render() {
    return (
      <div>
        <Adder />
        <Table />
      </div>
    );
  }
}
