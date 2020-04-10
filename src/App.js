import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const endOperator = /[x+/-]$/,
      multiDivide = /[x/]/,
      plusMinus = /[+-]/,
      maxDigits = 15,
      initialState = {
        displayInput: 0,
        displayStore: '0',
        stateDecimal: false,
        firstValueZero: true,
        firstValue: true,
        stateOperator: false,
        stateEquals: false,
        formula: ''
      };

//Number Array
const numbers = [{
  id: "zero",
  value: "0"
},{
  id: "one",
  value: "1"
},{
  id: "two",
  value: "2"
},{
  id: "three",
  value: "3"
},{
  id: "four",
  value: "4"
},{
  id: "five",
  value: "5"
},{
  id: "six",
  value: "6"
},{
  id: "seven",
  value: "7"
},{
  id: "eight",
  value: "8"
},{
  id: "nine",
  value: "9"
}]

//Operator Array
const operators = [{
  id: "add",
  value: "+"
},{
  id: "subtract",
  value: "-"
},{
  id: "multiply",
  value: "*"
},{
  id: "divide",
  value: "/"
},]


class CalcPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleNumberClick(e)  {
      if (this.state.displayInput=='0') {
        this.setState({
          displayInput: e.target.value
        });
      } else if (this.state.stateOperator===true && this.state.stateEquals===false) {
        this.setState({
          displayStore: this.state.displayStore + this.state.displayInput,
          displayInput: e.target.value,
          stateOperator: false,
          stateDecimal: false
        });
      } else if (this.state.stateOperator===false && this.state.stateEquals===true) {
        this.setState({
          displayStore: this.state.displayStore,
          displayInput: e.target.value,
          stateOperator: false,
          stateDecimal: false,
          stateEquals: false,
          firstValue: false
        });
      } else if (this.state.displayInput.length < maxDigits) {
       this.setState({
          displayInput: this.state.displayInput + e.target.value
        });
      }
  }

  deciClick(e) {
    if (this.state.stateOperator) {
      this.setState({
        displayStore: this.state.displayStore + this.state.displayInput,
        displayInput: '0.',
        stateDecimal: true,
        stateOperator: false
      });
    } else if (this.state.stateDecimal===false) {
      this.setState({
        displayInput: this.state.displayInput + e.target.value,
        stateDecimal: true
      });
    }
  }

  handleOperatorClick(e) {
    if (this.state.displayStore=='0') {
      console.log("Hello You");
        this.state.displayStore='';
    }
    if (this.state.stateOperator===false && this.state.stateEquals===false && this.state.firstValue===true) {
      this.setState({
        displayStore: this.state.displayStore + this.state.displayInput,
        displayInput: e.target.value,
        stateDecimal: false,
        stateOperator: true,
        stateEquals: false
      });
    } else if (this.state.stateOperator===false && this.state.stateEquals===true && this.state.firstValue===false) {
      this.setState({
        displayStore: this.state.displayInput,
        displayInput: e.target.value,
        stateDecimal: false,
        stateOperator: true,
        stateEquals: false,
        firstValue: true
      });
    } else if (this.state.stateOperator===false && this.state.stateEquals===false && this.state.firstValue===false) {
      this.setState({
        displayStore: this.state.displayInput,
        displayInput: e.target.value,
        stateDecimal: false,
        stateOperator: true,
        stateEquals: false,
        firstValue: true
      });
    } else if (multiDivide.test(this.state.displayInput) && plusMinus.test(e.target.value) && this.state.displayInput.length <= 1) {
       this.setState({
         displayInput: this.state.displayInput + e.target.value,
         stateDecimal: false,
         stateOperator: true
       });
    } else {
         this.setState({
           displayInput: e.target.value,
           stateDecimal: false,
           stateOperator: true
       });
    }
  }

  handleEqualsClick() {
    let formula = this.state.displayStore+this.state.displayInput;
    if (endOperator.test(formula)) {
      formula=formula.slice(0, -1);
    }
    formula = formula.replace(/x/g, "*");
    let result = eval(formula);
    this.setState({
      displayStore: result,
      displayInput: result,
      firstValue: false,
      stateDecimal: false,
      stateOperator: false,
      stateEquals: true
    });
  }

  clearClick() {
    this.setState(initialState);
  }

  render() {
    const numberPad = numbers.map(item => <button id={item.id} className="btn btn-primary" onClick={this.handleNumberClick.bind(this)} value={item.value}>{item.value}</button>);
    const operatorPad = operators.map(item => <button id={item.id} className="btn btn-warning" onClick={this.handleNumberClick.bind(this)} value={item.value}>{item.value}</button>);
    return (
      <div>
        <h1 id="title">JavaScript Calculator</h1>
        <div id="displayComplete">
            <p id="displayFormula">{this.state.displayStore}</p>
            <p id="display">{this.state.displayInput}</p>
        </div>
        <div id="numPad">
          {numberPad}
          {operatorPad}
          <button id="equals" className="btn btn-warning" onClick={(this.state.displayStore!="0" && this.state.stateDecimal===false) ? this.handleEqualsClick.bind(this) : ''} value="=">=</button>
          <button id="decimal" className="btn btn-warning" onClick={this.deciClick.bind(this)} value=".">.</button>
          <button id="clear" className="btn btn-warning" onClick={()=>this.clearClick()}>CLEAR</button>
        </div>
      </div>
     );
  }
}

ReactDOM.render(
  <CalcPad />, document.getElementById("js-calculator")
);

export default CalcPad;
