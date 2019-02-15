import React from 'react';
import './Button.css';



const ActionButton = props => {
  return (
    <button className={props.button.buttonName}>{props.button.text}</button>
  )
}

export default ActionButton
