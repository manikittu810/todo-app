import { useState } from "react";
import './CounterMinus.css';

export default function CounterMinus(){

const [count,setCount] = useState(0);
function decrementCounterFunction(){
    setCount(count-1);
    console.log(count);
};

    return(
        <div className="Counter">
            <span className="countless">{count}</span>
            <div>
                <button className="countButton" 
                onClick={decrementCounterFunction}>-1</button>
            </div>
        </div>
        
    );
}