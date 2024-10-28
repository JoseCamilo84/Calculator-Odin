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
  
  if (operator === '' || number1 === '' || number2 === '') return 0;

  let value1 = parseFloat(num1);
  let value2 = parseFloat(num2);
  let resultOfFunction;
  
  switch (operatorParam) {
    case '+':
      resultOfFunction = add(value1, value2);
      break;

    case '-':
      resultOfFunction = subtract(value1, value2);
      break;

    case 'x':
      resultOfFunction = multiply(value1, value2);
      break;

    case '/':
      resultOfFunction = divide(value1, value2);
      break;
  }

  if (typeof resultOfFunction === 'string') {
    display.classList.add('text-display');
    showScreen(resultOfFunction);
    number1 = '';
    number2 = '';
    operator = ''
    resultOfFunction = 0;
    previousStep = '';
  }

  return resultOfFunction;
}

function showScreen(value) {
  
  if (typeof value === 'number') {
    if (value > 99999999999999) {
      display.textContent = (value / 1000000).toPrecision(9);
    } else if (value.toString().length > 13) {
      display.textContent = value.toPrecision(2);
    } else {
      display.textContent = value;
    }
  }

  if (value === 'No se puede dividir entre cero') display.textContent = value;

  if (value.length <= 14) {
    display.textContent = parseFloat(value);
    return true;
  }
}

function searchPointString(stringValue) {
  return stringValue.includes('.');
}

function clearVariables() {
  number1 = '';
  number2 = '';
  previousStep = '';
  result = 0;
  operator = '';
}

const buttonsContainer = document.querySelector('.btns');
const display = document.querySelector('.display');

// UNA OPERACION CONSTA DE UN NUMERO UN OPERADOR Y OTRO NUMERO
let number1 = '';
let number2 = '';
let operator = '';
let result = 0;
display.textContent = 0;

let previousStep = '';

buttonsContainer.addEventListener('click', (e) => {

  if (e.target.matches('.operator')) {
    operator = e.target.textContent;
  }

  if (e.target.matches('.digit')) {

    if (previousStep === '=') clearVariables();

    if (operator !== '' && number1 !== '') {
      
      if (e.target.textContent === '.' && number2 === '') {
        number2 = '0.';
      } else {
        if (searchPointString(number2)) {
          if (e.target.textContent !== '.') number2 += e.target.textContent;
        } else {
          number2 += e.target.textContent;
        }

        if (showScreen(number2)) {
          result = operate(number1, number2, operator);
        }
      }
      
    } else if (e.target.textContent === '.' && number1 === '') {
      number1 = '0.';
    } else {
      if (searchPointString(number1)) {
        if (e.target.textContent !== '.') number1 += e.target.textContent;
      } else {
        number1 += e.target.textContent;
      }
      
      display.classList.remove('text-display');
      showScreen(number1);
    }
  }
    
  if (e.target.matches('.operator') || e.target.matches('.equal')) {
    
    if (result) {
      showScreen(result);
      number1 = result;
      number2 = '';
      previousStep = e.target.textContent;
    }
  }

  if (e.target.matches('.clear')) {
    clearVariables();
    display.classList.remove('text-display');
    display.textContent = 0;
  }
  
});
