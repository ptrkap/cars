import React from 'react';
import Add from './add/Add';
import Table from './table/Table';
import './App.css';

export default function(){
  return (
    <>
      <h2 id="title">Cars</h2>
      <Add />
      <br />
      <Table />
    </>
  );
}
