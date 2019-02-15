import React from 'react';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import './App.css';

const One = {
  buttonName: 'btn-number',
  text: '1'
}

const Two = {
  buttonName: 'btn-number',
  text: '2'
}

const Three = {
  buttonName: 'btn-number',
  text: '3'
}

const Four = {
  buttonName: 'btn-number',
  text: '4'
}

const Five = {
  buttonName: 'btn-number',
  text: '5'
}
const Six = {
  buttonName: 'btn-number',
  text: '6'
}

const Seven = {
  buttonName: 'btn-number',
  text: '7'
}

const Eight = {
  buttonName: 'btn-number',
  text: '8'
}
const Nine = {
  buttonName: 'btn-number',
  text: '9'
}

const Zero = {
  buttonName: 'btn-number',
  text: '0'
}

const Clear = {
  buttonName: 'btn-action',
  text: 'clear'
}

const AddButton = {
  buttonName: "add",
  text: "+"
}

const SubstractButton = {
  buttonName: "substract",
  text: "-"
}

const MultiplyButton = {
  buttonName: "multiply",
  text: "x"
}

const DivideButton = {
  buttonName: "divide",
  text: "/"
}

const EqualButton = {
  buttonName: "equal",
  text: "="
}

const DisplayButton = {
  buttonName: "display",
  text: "0"
}
const App = () => {
  return (

    <div className="container-calculator">
      <div className="calculator one">
        <CalculatorDisplay button={DisplayButton}/>
      </div>
      <div className="calculator two">
        <ActionButton button={Clear}/>
        <ActionButton button={DivideButton}/>
      </div>
      <div className="calculator three">
        <NumberButton button={Seven} />
        <NumberButton button={Eight} />
        <NumberButton button={Nine} />
        <ActionButton button={MultiplyButton} />
      </div>
      <div className="calculator four">
        <NumberButton button={Four} />
        <NumberButton button={Five} />
        <NumberButton button={Six} />
        <ActionButton button={SubstractButton} />
      </div>
      <div className="calculator five">
        <NumberButton button={One} />
        <NumberButton button={Two} />
        <NumberButton button={Three} />
        <ActionButton button={AddButton} />
      </div>
      <div className="calculator six">
        <ActionButton button={Zero} />
        <ActionButton button={EqualButton} />
      </div>
    </div>
  );
};

export default App;
