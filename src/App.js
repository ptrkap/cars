import React from 'react';
import Add from './add/Add';
import Table from './table/Table';
import './App.css';

export default function(){
  let offline = <span id="offlineConnetion"> - offline</span>;
  let serviceAvailable = false; // todo it is hardcoded now
  return (
    <>
      <h2 id="title">Cars{!serviceAvailable && offline}</h2>
      <Add />
      <br />
      <Table />
    </>
  );
}
