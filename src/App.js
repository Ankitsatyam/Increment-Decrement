// import Name from './Component/Name';
import './App.css';
import React from 'react';
import Buttons from './Component/Buttons';

function App() {
  let number = 0;

  return (
    <div>
      { /* Passing props as value */ }
      {/* we pass here value = {number} as a props */}
      <Buttons value={number}></Buttons>
    </div>
  );
}

export default App;
