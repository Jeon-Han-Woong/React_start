import logo from './logo.svg';
import './App.css';

import NotUsetStateAxios from './NotUseStateAxios';
import NotUsetStateFetch from './NotUseStateFetch';
import UsetStateAxios from './UseStateAxios';
import UsetStateFetch from './UseStateFetch';

function App() {
  return (
    <div>
      <NotUsetStateAxios></NotUsetStateAxios>
      <br/>
      <NotUsetStateFetch></NotUsetStateFetch>
      <br/>
      {/* <UsetStateAxios></UsetStateAxios> */}
      <br/>
      {/* <UsetStateFetch></UsetStateFetch> */}
    </div>
  );
}

export default App;
