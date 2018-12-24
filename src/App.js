import React from 'react';
import Add from './components/Add';
import Table from './components/Table';
import './styles/css/App.css';

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
