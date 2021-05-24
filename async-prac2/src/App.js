import React from 'react';
import './App.css';

import NotUsetStateAxios from './NotUseStateAxios';
import NotUsetStateFetch from './NotUseStateFetch';
import UsetStateAxios from './UseStateAxios';
import UsetStateFetch from './UseStateFetch';
import APIUseState from './APIUseState';

function App() {
  return (
    <div>
      {/* <NotUsetStateAxios></NotUsetStateAxios> */}
      <NotUsetStateFetch></NotUsetStateFetch>
      {/* <UsetStateAxios></UsetStateAxios> */}
      {/* <UsetStateFetch></UsetStateFetch> */}
      <APIUseState></APIUseState>
    </div>
  );
}

export default App;
