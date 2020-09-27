/*                                      Управление калькулятором
*******************************************************************************************
*/
let display = document.querySelector('#display'); //дисплей
const digitsButtons = document.querySelectorAll('[digits]'); //цифровые кнопки
const operationButtons = document.querySelectorAll('[operators]'); //кнопки операций
const clearButton = document.querySelector('#clear-all'); //полный сброс
const decimalButton = document.querySelector('#decimal');//десятичная точка
const deleteButton = document.querySelector('[delete]');//удаление символа
const negativeButton = document.querySelector('[negative]');//отрицательное число
const sqrtButton = document.querySelector('[sqrt]');//извлечение корня
const quadroButton = document.querySelector('[quadro]'); //возведение в квадрат
const powButton = document.querySelector('[powN]');//возведение числа в степень n
const percentButton = document.querySelector('[percent]'); //процент

//******************************************************************************************

/* Переменные памяти 
********************************************************************************************
*/

let currentValue = 0,
    newValue = false,
    sqrtValue = false,
    numberToPow = 0;
    
    
    let MemoryPendingOperation = '';    

//*******************************************************************************************


function pressNumber() {
digitsButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (newValue) {
            display.placeholder = e.target.textContent;
            newValue = false;
        } else {
            if (display.placeholder === '0') {
                display.placeholder = e.target.textContent;
            } else {
                display.placeholder += e.target.textContent;
            }
        }
        return;
    });
} );
}

pressNumber();

function decimal() {
    decimalButton.addEventListener('click', (e) => {
        if (newValue) {
            display.placeholder = '0.';
            newValue = false;
        } else {
            if (display.placeholder.indexOf('.') === -1) {
                display.placeholder += '.';
            }     
        }
    });
}

decimal();

function getOperation() {
    operationButtons.forEach(operationButton => {
        operationButton.addEventListener('click', (e) => {
            let localOperationMemory = Number(display.placeholder);
  
    if (newValue && MemoryPendingOperation !== '=') {
      display.placeholder = currentValue;
    } else {
        newValue = true;
      if (MemoryPendingOperation === '+') {
        currentValue += localOperationMemory;
      } else if (MemoryPendingOperation === '-') {
        currentValue -= localOperationMemory;
      } else if (MemoryPendingOperation === '×') {
        currentValue *= localOperationMemory;
      } else if (MemoryPendingOperation === '÷') {
        currentValue /= localOperationMemory;
      } else {
        currentValue = localOperationMemory;
      }
      display.placeholder = currentValue;
      MemoryPendingOperation = e.target.textContent;
    }
        });
    });
}

getOperation();

function clearAll() {
    clearButton.addEventListener('click', (e) => {
        if (e.target.textContent === 'C') {
            display.placeholder = '0';
            newValue = true;
            currentValue = 0;
            MemoryPendingOperation = '';
        }
    });
}

clearAll();

function deleteValue() {
    deleteButton.addEventListener('click', (e) => { 
        if (display.placeholder === '0') {
            return;
        }
        
        let lengthValue = display.placeholder.length;
        if (lengthValue === 1) {
            display.placeholder = '0';
        } else {
            display.placeholder = display.placeholder.substring(0, lengthValue-1);
        }
    });

}

deleteValue();

function negative() {
    negativeButton.addEventListener('click', (e) => {
        if (display.value === '/-/') {
            return;
        }
        if (display.placeholder.substring(0,1) === '-') {
            display.placeholder = display.placeholder.substring(1);
        } else {
            display.placeholder = '-'+display.placeholder;
        }
    });
}

negative();



function sqrt() {
    sqrtButton.addEventListener('click', () => {
        if (display.placeholder.substring(0,1) === '-') {
            clearAll();
            display.placeholder = 'Error!';
            return;
        }
        
        if (currentValue === 0) {
            currentValue = Math.sqrt(parseFloat(display.placeholder));
            display.placeholder = currentValue; 
        } else {
            display.placeholder = Math.sqrt(parseFloat(display.placeholder));
            newValue = false;
        }
        sqrtValue = true;
    });
}

sqrt();

function quadro() {
    quadroButton.addEventListener('click', () => {
        if (currentValue === 0) {
            currentValue = Math.pow(parseFloat(display.placeholder), 2);
            display.placeholder = currentValue; 
        } else {
            display.placeholder = Math.pow(parseFloat(display.placeholder), 2);
            newValue = false;
        }
        sqrtValue = true;
    });
}

quadro();

function powN() {
    powButton.addEventListener('click', () => {
        
    });
}

powN();

function getPercent() {
    percentButton.addEventListener('click', () => {
        
    });
}

getPercent();



console.log(display);
console.log(digitsButtons);
console.log(operationButtons);
console.log(clearButton);
console.log(decimalButton);

 