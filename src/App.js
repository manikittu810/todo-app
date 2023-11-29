import './App.css';
import Counter from './components/counter/Counter'
// import CounterMinus from './components/counter/CounterMinus';
// import LearningComponents from "./components/learning-examples/LearningComponents.jsx";

function App() {
  return (
    <div className="App">
      <PlayingWithProps property1="value1" property2="value2"/>
      <Counter by={1}/>
      {/* <CounterMinus/> */}
      <Counter by={2}/>
      <Counter by={5}/>
    </div>    
  );
}

function PlayingWithProps({property1,property2}){
  console.log(property1);
  console.log(property2);
  return(
    <div>props</div>
  );
}

export default App;
