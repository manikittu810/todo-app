import './App.css';
import Counter from './components/counter/Counter'
import CounterMinus from './components/counter/CounterMinus';
// import LearningComponents from "./components/learning-examples/LearningComponents.jsx";

function App() {
  return (
    <div className="App">
      <Counter/>
      <CounterMinus/>
    </div>

    
  );
}

export default App;
