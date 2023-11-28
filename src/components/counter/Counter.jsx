import './Counter.css'
import { useState } from 'react';


export default function Counter(){

//state is returning two values , it returns first one is a value and second one is a function.
//[0,f] the state contains an initial value of the state as the first value and  it is passed as a parameter to the state.

    const [count,setCount] = useState(0);

    function incrementCounterFunction(){
        setCount(count+1);
        console.log(count);
    };

    return(
    <div className="Counter">
        <span className="count">{count}</span>
        <div>
            <button className="counterButton" 
            onClick={incrementCounterFunction}>+1</button>
        </div>
       </div>
    );
}