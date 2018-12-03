import React, { Component } from 'react';
import Add from './add/Add';
import Table from './table/Table';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2 id="title">Cars</h2>
        <Add />
        <br />
        <Table />
      </div>
    );
  }
}
