import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <div>
      <button className="action">{props.actionButton.action}</button>
      <button className="actionTwo">{props.actionButton.action2}</button>
      <button className="row">{props.actionButton.action2}</button>
    </div>
  );
};

export default Button