let displayValue = "";
let firstNumber = "";
let operator = "";

function appendValue(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  firstNumber = "";
  operator = "";
  updateDisplay();
}

function setOperator(op) {
  if (firstNumber === "") {
    firstNumber = displayValue;
    operator = op;
    displayValue = firstNumber + operator; 
  } else {

    calculate();
    operator = op;
  
    displayValue = firstNumber + operator;
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}

function calculate() {
  if (firstNumber !== "" && operator !== "") {
    const secondNumber = displayValue.substring(firstNumber.length + 1);
    switch (operator) {
      case '+':
        displayValue = roundResult(parseFloat(firstNumber) + parseFloat(secondNumber));
        break;
      case '-':
        displayValue = roundResult(parseFloat(firstNumber) - parseFloat(secondNumber));
        break;
      case '*':
        displayValue = roundResult(parseFloat(firstNumber) * parseFloat(secondNumber));
        break;
      case '/':
        if (parseFloat(secondNumber) !== 0) {
          displayValue = roundResult(parseFloat(firstNumber) / parseFloat(secondNumber));
        } else {
          displayValue = "Error: Division by zero";
        }
        break;
      default:
        displayValue = "Error";
    }
    firstNumber = displayValue;
    operator = "";
    updateDisplay();
  }
}

function roundResult(result) {
  
  return Math.round(result * 1000000) / 1000000;
}