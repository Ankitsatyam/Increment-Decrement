import { useState } from 'react';
import './Buttons.css'

function Button_details(props) { //accepting props in function

    //  If we use useState at first we must initalize the value under bracket (useState(initalize value)) 
    //  and it will give two things 1st- a setter function and 2nd  - a variable in which you want to initalize your variable
    

    let [number, setNumber] = useState(props.value);//accepting props and initializing as a initial value
    return (
        <div className='container'>
            <div className="main">
                <div className='num'>{number}</div>
                <div className="btn">
                    <button className='incre-btn' onClick={incrementHandling}>Increment</button>
                    <button className='decre-btn' onClick={decrementHandling}>Decrement</button>
                </div>
                    <button className='reset' onClick={resetHandling}>Reset</button>
                
            </div>
        </div>
    );
    function incrementHandling() {
        number += 1;
        setNumber(number);
    }
    function decrementHandling() {
        number -= 1;
        setNumber(number);
    }
    function resetHandling() {
        number = 0;
        setNumber(number);
    }
}

export default Button_details;