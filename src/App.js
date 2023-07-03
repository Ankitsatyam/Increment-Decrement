// import Name from './Component/Name';
import './App.css';
import React from 'react';
import Button_details from './Component/ButtonDetails';

function App() {
  let number = 0;

  return (
    <div>
      { /* Passing props as value */ }
      {/* we pass here value = {number} as a props */}
      <Button_details value={number}></Button_details>
    </div>
  );
}

export default App;
