/*                                      Управление калькулятором
*******************************************************************************************
*/
const display = document.getElementsByTagName('input'); //дисплей
const digitsButtons = document.querySelectorAll('[digits]'); //цифровые кнопки
const operationButtons = document.querySelectorAll('[operators]'); //кнопки операций
const clearButton = document.getElementById('clear'); //сброс значения
const ClearAllButton = document.getElementById('clear-all');
const decimalButton = document.getElementById('decimal');
const resultButton = document.getElementById('result');

//******************************************************************************************

/* Переменные памяти 
********************************************************************************************
*/

let currentValue = 0,
    newValue = false,
    currentOperation = '',
    sqrSqrtNumber = false,
    numberToPow = 0;

//*******************************************************************************************

console.log(display);
console.log(digitsButtons);
console.log(operationButtons);
console.log(clearButton);
console.log(ClearAllButton);
console.log(decimalButton);
console.log(resultButton);
 