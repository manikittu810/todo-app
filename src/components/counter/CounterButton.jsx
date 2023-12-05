import './Counter.css'
import {PropTypes} from 'prop-types';

export default function CounterButton({by,incrementMethod,decrementMethod}){

    //state is returning two values , it returns first one is a value and second one is a function.
    //[0,f] the state contains an initial value of the state as the first value and  it is passed as a parameter to the state.
            function incrementCounterFunction(){
            incrementMethod(by);
        };
        function decrementCounterFunction(){
            decrementMethod(by);
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