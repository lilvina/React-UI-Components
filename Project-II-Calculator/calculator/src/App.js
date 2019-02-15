import React from 'react';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import './App.css';

const One = {
  buttonStyle: 'btn-number',
  text: '1'
}

const Two = {
  buttonStyle: 'btn-number',
  text: '2'
}

const Three = {
  buttonStyle: 'btn-number',
  text: '3'
}

const Four = {
  buttonStyle: 'btn-number',
  text: '4'
}

const Five = {
  buttonStyle: 'btn-number',
  text: '5'
}
const Six = {
  buttonStyle: 'btn-number',
  text: '6'
}

const Seven = {
  buttonStyle: 'btn-number',
  text: '7'
}

const Eight = {
  buttonStyle: 'btn-number',
  text: '8'
}
const Nine = {
  buttonStyle: 'btn-number',
  text: '9'
}

const Zero = {
  buttonStyle: 'btn-action',
  text: '0'
}

const Clear = {
  buttonStyle: 'btn-action',
  text: 'clear'
}

const AddButton = {
  buttonStyle: "btn-math",
  text: "+"
}

const SubstractButton = {
  buttonStyle: "btn-math",
  text: "-"
}

const MultiplyButton = {
  buttonStyle: "btn-math",
  text: "x"
}

const DivideButton = {
  buttonStyle: "btn-math",
  text: "/"
}

const EqualButton = {
  buttonStyle: "btn-math",
  text: "="
}

const DisplayButton = {
  buttonStyle: "btn-display",
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
