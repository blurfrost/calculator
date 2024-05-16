let result;
let first = 6;
let second = 3;
let addNum = add(first, second);
let subtractNum = subtract(first, second);
let multiplyNum = multiply(first, second);
let divideNum = divide(first, second);


function add(firstNum, secondNum) {
    result = firstNum + secondNum;
    console.log(result);
}

function subtract(firstNum, secondNum) {
    result = firstNum - secondNum;
    console.log(result);
}

function multiply(firstNum, secondNum) {
    result = firstNum * secondNum;
    console.log(result);
}

function divide(firstNum, secondNum) {
    result = firstNum / secondNum;
    console.log(result);
}
