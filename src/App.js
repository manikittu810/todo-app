import logo from './logo.svg';
import './App.css';
import  FirstComponent from './components/learning-examples/FirstComponent';
import  ThirdComponent from './components/learning-examples/ThirdComponent'
import  SecondComponent from './components/learning-examples/SecondComponent'
import  FourthComponent from './components/learning-examples/FourthComponent'

import { Component } from 'react';

function App() {
  return (
    <div className="App">
      My Todo Application
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
    </div>
  );
}

export default App;
