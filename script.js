let result;
let first = 6;
let second = 3;
let operator = "+";
operate(first, operator, second);

function operate(firstNum, operator, secondNum) {
    if (operator === "+") {
        result = add(firstNum, secondNum);
    }
    else if (operator === "-") {
        result = subtract(firstNum, secondNum);
    }
    else if (operator === "X") {
        result = multiply(firstNum, secondNum);
    }
    else if (operator === "/") {
        result = divide(firstNum, secondNum);
    }
    console.log(result);
}


function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}
