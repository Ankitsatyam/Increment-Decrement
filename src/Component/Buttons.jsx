import React, { useState } from 'react'
import './Buttons.css'

function Buttons() {
    const [number,setNumber] = useState(0)
  return (
    <div className='container'>
      <div className="box">
        <div className="number">{number}</div>
        <div className="buttons">
            <button className='increase-buttons' onClick={() => setNumber(number + 1)}>Increase</button>
            <button className='decrease-buttons' onClick={() => setNumber(number - 1)}>Decrease</button>
        </div>
        <div className="reset-button">
            <button className="reset-button" onClick={() => setNumber(0)}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Buttons
