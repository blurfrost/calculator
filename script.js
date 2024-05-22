let result;
let first = 6;
let second = 3;
let operator = "+";
let displayValue = "0";
const displayActual = document.querySelector("#display");
const errorMessage = document.querySelector("#error-showcase");

const buttonZero = document.querySelector("#zero");
buttonZero.addEventListener("click", () => reflectOnDisplay("0"));

const buttonOne = document.querySelector("#one");
buttonOne.addEventListener("click", () => reflectOnDisplay("1"));

const buttonTwo = document.querySelector("#two");
buttonTwo.addEventListener("click", () => reflectOnDisplay("2"));

const buttonThree = document.querySelector("#three");
buttonThree.addEventListener("click", () => reflectOnDisplay("3"));

const buttonFour = document.querySelector("#four");
buttonFour.addEventListener("click", () => reflectOnDisplay("4"));

const buttonFive = document.querySelector("#five");
buttonFive.addEventListener("click", () => reflectOnDisplay("5"));

const buttonSix = document.querySelector("#six");
buttonSix.addEventListener("click", () => reflectOnDisplay("6"));

const buttonSeven = document.querySelector("#seven");
buttonSeven.addEventListener("click", () => reflectOnDisplay("7"));

const buttonEight = document.querySelector("#eight");
buttonEight.addEventListener("click", () => reflectOnDisplay("8"));

const buttonNine = document.querySelector("#nine");
buttonNine.addEventListener("click", () => reflectOnDisplay("9"));

const allClearButton = document.querySelector("#all-clear");
allClearButton.addEventListener("click", () => reflectOnDisplay("allclear"))

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => reflectOnDisplay("clear"))

const addButton = document.querySelector("#add");
addButton.addEventListener("click", () => reflectOnDisplay("+"))

const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click", () => reflectOnDisplay("-"))

const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", () => reflectOnDisplay("*"))

const divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", () => reflectOnDisplay("/"))


function reflectOnDisplay(input) {
    console.log(input);
    errorMessage.textContent = "";
    if (input >= 0 && input <= 9 && checkCurrentDisplay("numeric")) {
        displayValue += input;
    }
    else if (input === "allclear") {
        displayValue = "0";
    }
    else if (input === "clear") {
        displayValue = displayValue.slice(0, -1);
    }
    else if ((input === "+" || input === "-" || input === "*" || input === "/") && checkCurrentDisplay("operator")) {
        displayValue += input;
    }
    updateDisplay(displayValue);
}


function checkCurrentDisplay(type) {
    // clears display of initial "0" when first number is keyed in
    if (displayValue === "0" && type === "numeric") {
        displayValue = "";
    }
    // character limit for the calculator
    else if ((displayValue.length >= 16 && type === "numeric") || (displayValue.length >= 15 && type === "operator")) {
        errorMessage.textContent = "Character limit reached, please use C or AC to reduce the number of characters";
        return 0;
    }
    return 1;
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


