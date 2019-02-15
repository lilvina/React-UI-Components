import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  return (
    <button className={props.button.buttonName}>{props.button.text}</button>
  )
}

export default CalculatorDisplay
