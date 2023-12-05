import './App.css';
import Counter from './components/counter/Counter'
// import CounterMinus from './components/counter/CounterMinus';
// import LearningComponents from "./components/learning-examples/LearningComponents.jsx";

function App() {
  return (
    <div className="App">
      <Counter/>    
      </div>    
  );
}

// function PlayingWithProps({property1,property2}){
//   console.log(property1);
//   console.log(property2);
//   return(
//     <div>props</div>
//   );
// }

export default App;
