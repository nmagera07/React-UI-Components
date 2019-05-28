import React from 'react';
import './App.css';
import Button from './components/ButtonComponents/ActionButton'
import Numbers from './components/ButtonComponents/NumberButton'
import Operators from './components/ButtonComponents/Operators'

function App() {
  
  const numberButton1 = {num: '7', num2: '8', num3: '9'}
  const numberButton2 = {num: '4', num2: '5', num3: '6'}
  const numberButton3 = {num: '1', num2: '2', num3: '3'}
  const actionButton1 = {action: 'clear', action2: '0'}
  const operators = {opt: '%', opt2: 'x', opt3: '-', opt4: '+', opt5: '='}
  
  return (
    <div className="App">
      <Numbers numberButton={numberButton1}/>
      <Numbers numberButton={numberButton2}/>
      <Numbers numberButton={numberButton3}/> 
     
      <Button actionButton={actionButton1} />
      <Operators operator={operators} />
    </div>
  );
}

export default App;
