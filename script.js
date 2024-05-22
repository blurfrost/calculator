let result;
let first = 6;
let second = 3;
let operator = "+";
let displayValue = "0";
const displayActual = document.querySelector("#display");

const buttonZero = document.querySelector("#zero");
buttonZero.addEventListener("click", () => {
    initialClear();
    displayValue += "0";
    updateDisplay(displayValue);
});

const buttonOne = document.querySelector("#one");
buttonOne.addEventListener("click", () => {
    initialClear();
    displayValue += "1";
    updateDisplay(displayValue);
});

const buttonTwo = document.querySelector("#two");
buttonTwo.addEventListener("click", () => {
    initialClear();
    displayValue += "2";
    updateDisplay(displayValue);
});

const buttonThree = document.querySelector("#three");
buttonThree.addEventListener("click", () => {
    initialClear();
    displayValue += "3";
    updateDisplay(displayValue);
});

const buttonFour = document.querySelector("#four");
buttonFour.addEventListener("click", () => {
    initialClear();
    displayValue += "4";
    updateDisplay(displayValue);
});

const buttonFive = document.querySelector("#five");
buttonFive.addEventListener("click", () => {
    initialClear();
    displayValue += "5";
    updateDisplay(displayValue);
});

const buttonSix = document.querySelector("#six");
buttonSix.addEventListener("click", () => {
    initialClear();
    displayValue += "6";
    updateDisplay(displayValue);
});

const buttonSeven = document.querySelector("#seven");
buttonSeven.addEventListener("click", () => {
    initialClear();
    displayValue += "7";
    updateDisplay(displayValue);
});

const buttonEight = document.querySelector("#eight");
buttonEight.addEventListener("click", () => {
    initialClear();
    displayValue += "8";
    updateDisplay(displayValue);
});

const buttonNine = document.querySelector("#nine");
buttonNine.addEventListener("click", () => {
    initialClear();
    displayValue += "9";
    updateDisplay(displayValue);
});

function initialClear() {
    if (displayValue === "0") {
        displayValue = "";
    }
}

function updateDisplay(display) {
    displayActual.textContent = display;
}

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


