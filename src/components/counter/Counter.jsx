import './Counter.css'
import { useState } from 'react';
import {PropTypes} from 'prop-types';

export default function Counter(){

    const[count,setCount] = useState(0);
    function incrementCounterParentFunction(by){
            setCount(count+by);
    }
    return (
        <>
        <span className="totalCount">{count}</span>
        <CounterButton by={1}/>
          <CounterButton by={2}/>
          <CounterButton by={5}/>
        </>
    );
   
    

}

 function CounterButton({by}){

//state is returning two values , it returns first one is a value and second one is a function.
//[0,f] the state contains an initial value of the state as the first value and  it is passed as a parameter to the state.

    const [count,setCount] = useState(0);
    console.log(by);
    function incrementCounterFunction(){
        setCount(count+by);
        console.log(count);
    };
    function decrementCounterFunction(){
        setCount(count-by);
        console.log(count);
    };

    return(
    <div className="Counter">
        <div>
            <button className="counterButton" 
            onClick={incrementCounterFunction}>+{by}</button>
            <button className="counterButton" 
            onClick={decrementCounterFunction}>-{by}</button>
        </div>
       </div>
    );
}

CounterButton.propType={
    by : PropTypes.number
}
