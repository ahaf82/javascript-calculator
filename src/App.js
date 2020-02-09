import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const endOperator = /[x+/-]$/,
      multiDivide = /[x/]/,
      plusMinus = /[+-]/,
      maxDigits = 19,
      initialState = {
        displayInput: 0,
        displayStore: ' ',
        stateDecimal: false,
        firstValueZero: true,
        firstValue: true,
        stateOperator: false,
        stateEquals: false,
        formula: ''
      };

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
    console.log(formula);
    formula = formula.replace(/x/g, "*");
    let result = eval(formula);
    console.log(result);
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
    return (
      <div>
        <h1 id="title">JavaScript Calculator</h1>
        <div id="displayComplete">
            <p id="displayFormula">{this.state.displayStore}</p>
            <p id="display">{this.state.displayInput}</p>
        </div>
        <div id="numPad">
          <button id="zero" className="btn btn-primary" onClick={this.handleNumberClick.bind(this)} value="0">0</button>
          <button id="one" className="btn btn-primary" onClick={this.handleNumberClick.bind(this)} value="1">1</button>
          <button id="two" className="btn btn-primary" onClick={this.handleNumberClick.bind(this)} value="2">2</button>
          <button id="three" className="btn btn-primary" onClick={this.handleNumberClick.bind(this)} value="3">3</button>
          <button id="four" className="btn btn-primary" onClick={this.handleNumberClick.bind(this)} value="4">4</button>
          <button id="five" className="btn btn-primary" onClick={this.handleNumberClick.bind(this)} value="5">5</button>
          <button id="six" className="btn btn-primary" onClick={this.handleNumberClick.bind(this)} value="6">6</button>
          <button id="seven" className="btn btn-primary" onClick={this.handleNumberClick.bind(this)} value="7">7</button>
          <button id="eight" className="btn btn-primary" onClick={this.handleNumberClick.bind(this)} value="8">8</button>
          <button id="nine" className="btn btn-primary" onClick={this.handleNumberClick.bind(this)} value="9">9</button>
          <button id="add" className="btn btn-warning" onClick={this.handleOperatorClick.bind(this)} value="+">+</button>
          <button id="subtract" className="btn btn-warning" onClick={this.handleOperatorClick.bind(this)} value="-">-</button>
          <button id="multiply" className="btn btn-warning" onClick={this.handleOperatorClick.bind(this)} value="x">*</button>
          <button id="divide" className="btn btn-warning" onClick={this.handleOperatorClick.bind(this)} value="/">/</button>
          <button id="equals" className="btn btn-warning" onClick={this.handleEqualsClick.bind(this)} value="=">=</button>
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
