import React from 'react';
import './Button.css';


const Numbers = (props) => {
  
  return (
    <div>
      <button className="rowOne">{props.numberButton.num}</button>
      <button className="rowOne">{props.numberButton.num2}</button>
      <button className="rowOne">{props.numberButton.num3}</button>
      
    </div>
  );
};

export default Numbers