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
  
  if (operator === '' || number1 === '' || number2 === '') return;

  let value1 = parseInt(num1);
  let value2 = parseInt(num2);
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
    display.style.fontSize = '21px';
    display.style.lineHeight = '35px';
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
  display.textContent = value;
}

const buttonsContainer = document.querySelector('.btns');
const display = document.querySelector('.display');
// const operatorBtn = document.querySelector('.operator');

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
    e.target.style.background = 'rgb(121, 181, 199)';
  }

  if (e.target.matches('.digit')) {

    if (previousStep === '=') {
      number1 = '';
      number2 = '';
      previousStep = '';
      result = 0;
    }

    if (operator !== '' && number1 !== '') {
      number2 += e.target.textContent;
      showScreen(parseInt(number2));
      result = operate(number1, number2, operator);
      console.log(result);
    } else {
      number1 += e.target.textContent;
      display.removeAttribute('style');
      showScreen(parseInt(number1));
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
    number1 = '';
    number2 = '';
    operator = ''
    result = 0;
    previousStep = '';
    display.textContent = 0;
    // operatorBtn.style.background = 'lightblue';
  }
  
});

// pulsas un botón numérico (12), seguido de un botón operador (+), un segundo botón numérico (7), y finalmente un segundo botón operador (-). Tu calculadora debería entonces hacer lo siguiente: primero, evaluar el primer par de números (12 + 7), segundo, mostrar el resultado de ese cálculo (19), y finalmente, usar ese resultado (19) como el primer número en tu nuevo cálculo, junto con el siguiente operador (-)