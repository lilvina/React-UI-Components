import React from 'react';
import './Button.css';


const NumberButton = props => {
  return (
    <button className={props.button.buttonName}>{props.button.text}</button>
  )
}

export default NumberButton
