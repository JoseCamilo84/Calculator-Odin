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
  let resultOfFunction = 0;
  
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

  return resultOfFunction;
}

function displayValueOne(e) {
  let displayValueOne = '';
  if (e.target.matches('.digit')) {
    return displayValueOne += e.target.textContent;
  }
}

function displayValueTwo(e) {
  let displayValueTwo = '';
  if (e.target.matches('.digit')) {
    return displayValueTwo += e.target.textContent;
  }
}

const buttonsContainer = document.querySelector('.btns');
const display = document.querySelector('.display');

// UNA OPERACION CONSTA DE UN NUM UN OPERADOR Y OTRO NUMERO
let number1 = '';
let number2 = '';
let operator = '';
let result = 0;
display.textContent = 0;

buttonsContainer.addEventListener('click', (e) => {

  if (operator !== '' && number1 !== '') {
    number2 += displayValueTwo(e);
    display.textContent = parseInt(number2);
  } else {
    number1 += displayValueOne(e);
    display.textContent = parseInt(number1);
  }

  if (e.target.matches('.operator')) operator = e.target.textContent;

  if (e.target.matches('.equal')) {
    console.log(operate(number1, number2, operator));
    display.textContent = operate(number1, number2, operator);
  }

  if (e.target.matches('.clear')) {
    number1 = '';
    number2 = '';
    operator = ''
    result = 0;
    display.textContent = 0;
  }
  
});

// Usted ya debe tener el código que puede rellenar la pantalla, por lo que una vez operate() se ha llamado, actualizar la pantalla con la "solución" a la operación. Esta es la parte más difícil del proyecto. Tienes que averiguar cómo almacenar todos los valores y llamar a la función operate con ellos. No te sientas mal si te lleva un tiempo averiguar la lógica.