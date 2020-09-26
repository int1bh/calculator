/*                                      Управление калькулятором
*******************************************************************************************
*/
let display = document.querySelector('#display'); //дисплей
const digitsButtons = document.querySelectorAll('[digits]'); //цифровые кнопки
const operationButtons = document.querySelectorAll('[operators]'); //кнопки операций
const clearButton = document.querySelector('#clear-all'); //полный сброс
const decimalButton = document.querySelector('#decimal');//десятичная точка
const deleteButton = document.querySelector('[delete]');

//******************************************************************************************

/* Переменные памяти 
********************************************************************************************
*/

let currentValue = 0,
    newValue = false,
    //currentOperation = '',
    sqrSqrtNumber = false,
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
      } else if (MemoryPendingOperation === 'xn') {
          currentValue = Math.pow(currentValue, localOperationMemory);
      }
        else {
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



console.log(display);
console.log(digitsButtons);
console.log(operationButtons);
console.log(clearButton);
console.log(decimalButton);

 