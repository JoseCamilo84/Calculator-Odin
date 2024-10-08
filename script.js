function add(value1, value2) {
  return value1 + value2;
}

function subtract(value1, value2) {
  return value1 - value2;
}

function multiply(value1, value2) {
  return value1 * value2;
}

function divide(value1, value2) {
  if (value2 === 0) return 'No se puede dividir entre cero';
  return value1 / value2;
}

function operate(num1, num2, operatorParam) {
  let value1 = parseInt(num1);
  let value2 = parseInt(num2);
  let resultOfFunction;
  
  switch (operatorParam) {
    case '+':
      resultOfFunction = add(value1, value2);
      // display.textContent = resultOfFunction;
      // number1 = display.textContent;
      // cleanVariables();
      break;

    case '-':
      resultOfFunction = subtract(value1, value2);
      break;

    case 'x':
      console.log('multiplicar');
      break;

    case '/':
      console.log('dividir');
      break;
  }
  return resultOfFunction;
}

function chooseOperator(e) {
  if (e.target.matches('.operator')) {
    operator = e.target.textContent;
  }
}

function getValueOne(e) {
  if (result && !e.target.matches('.digit')) {
    number1 = result;
    result = 0;
  } else if (e.target.matches('.digit')) {
    number1 += e.target.textContent;
    display.textContent = number1;
  }
}

function getValueTwo(e) {
  if (e.target.matches('.digit')) {
    number2 += e.target.textContent;
    display.textContent = number2;
  }
}

function cleanVariables() {
  number1 = '';
  number2 = '';
  operator = '';
  // result = 0;
}

function mathOperation(e) {
  if (e.target.matches('.equal') && operator !== '' && number1 !== '' && number2 !== '') {
    
    result = operate(number1, number2, operator);
    display.textContent = result;
    cleanVariables();

  }
}

function showOnScreen() {
  buttonsContainer.addEventListener('click', (e) => {
    chooseOperator(e);
    
    (operator !== '' && number1 !== '') ? getValueTwo(e) : getValueOne(e);

    mathOperation(e);
    console.log(result, operator);

    // if (result && e.target.matches('.digit')) {
    //   // cleanVariables();
    //   number1 = '';
    //   result = 0;
    //   console.log('aqui entra', number1, number2, operator, result);
    
    // } else if (result && operator !== '') {
    //   number1 = result;
    //   number2 = '';
    //   // operator = '';
    //   // result = 0;
      
    //   console.log('aqui entra en el else', number1, number2, operator, result);
    //   // getValueTwo(e);
    // } 

    
    
    

    if (e.target.matches('.clear')) {
      display.textContent = 0;
      cleanVariables();
    }
  });
}

const buttonsContainer = document.querySelector('.btns');
const display = document.querySelector('.display');


let number1 = '';
let number2 = '';
let operator = '';
let result = 0;

display.textContent = 0;

showOnScreen();
