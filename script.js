let result;
let first = 6;
let second = 3;
let operator = "+";
let displayValue = "0";
const charLimit = 18;
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
allClearButton.addEventListener("click", () => reflectOnDisplay("allclear"));

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => reflectOnDisplay("clear"));

const addButton = document.querySelector("#add");
addButton.addEventListener("click", () => reflectOnDisplay("+"));

const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click", () => reflectOnDisplay("-"));

const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", () => reflectOnDisplay("*"));

const divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", () => reflectOnDisplay("/"));

const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", () => reflectOnDisplay("."));

const equalButton = document.querySelector("#equate");
equalButton.addEventListener("click", () => reflectOnDisplay("="));


function reflectOnDisplay(input) {
    errorMessage.textContent = "";
    // update display if a number is clicked
    if (input >= 0 && input <= 9 && checkCurrentDisplay("numeric")) {
        displayValue += input;
    }
    else if (input === "." && noDecimal()) {
        displayValue += input;
    }
    // update display (to 0) if allclear is clicked OR clear is clicked when length is 1
    else if (input === "allclear" || input === "clear" && displayValue.length === 1) {
        displayValue = "0";
    }
    // update display if clear is clicked by removing most recent input
    else if (input === "clear") {
        displayValue = displayValue.slice(0, -1);
    }
    // update display if operator is clicked, provided there is enough character space for an additional number after the operator and if the operator limit (1) has not been reached
    else if (checkForOperator(input) && checkCurrentDisplay("operator") && noCurrentOperator("operator")) {
        displayValue += input;
    }
    else if (input === "=" && !noCurrentOperator("equate")) {
            displayValue = commenceOperation(displayValue);
    }
    console.log("Input: " + input + " Display: " + displayValue + " Chars: " + displayValue.length);
    updateDisplay(displayValue);
}

function checkCurrentDisplay(type) {
    // clears display of initial "0" when first number is keyed in
    if (displayValue === "0" && type === "numeric") {
        displayValue = "";
    }
    // character limit for the calculator
    else if (displayValue.length >= charLimit && type === "numeric") {
        displayError("charLimitReached");
        return 0;
    }
    else if (displayValue.length >= (charLimit - 1) && type === "operator") {
        displayError("operatorAtCharLimit");
        return 0;
    }
    return 1;
}

function noDecimal() {
    let startPosition = 0;
    // if an operator is currently present, then start checking for decimal after the operator position, else check from the beginning
    for (i = 0; i < displayValue.length; i++) {
        if (checkForOperator(displayValue[i])) {
            startPosition = i + 1;
            break;
        }
    }
    return checkForDecimal(startPosition);
}

function checkForDecimal(base) {
    for (j = base; j < displayValue.length; j++) {
        if (displayValue[j] === ".") {
            displayError("decimalLimit");
            
            return 0;
        }
    }
    return 1;
}

function checkForOperator(value) {
    return (value === "+" || value === "-" || value === "*" || value === "/");
}

// iterates through the current display value to count the number of operators, returning an error if a second operator is about to be input
function noCurrentOperator(input) {
    let operatorCount = 0;
    for (i = 0; i < displayValue.length; i++) {
        if(checkForOperator(displayValue[i])) {
            operatorCount += 1;
        }
    }
    if (operatorCount >= 1) {
        if (input === "operator") {
            displayError("operatorLimit");
        }
        return 0;
    }
    return 1;
}

function updateDisplay(display) {
    displayActual.textContent = display;
}

function commenceOperation(displayValue) {
    let operator = "";
    let operatorPoint = "";
    for (i = 0; i < displayValue.length; i++) {
        if(checkForOperator(displayValue[i])) {
            // extract operator (there should be only one after the prior checks)
            operator = displayValue[i];
            operatorPoint = i;
            break;
        }
    }
    // extract first number (note: need to convert numbers from string to number form, if not they will just be concatanated)
    first = Number(displayValue.slice(0, operatorPoint));
    // extract second number
    second = Number(displayValue.slice(operatorPoint + 1, displayValue.length));
    // perform calculation
    let calculatedNumber = operate(first, operator, second);
    let calculatedString = String(calculatedNumber);
    if (calculatedString.length > charLimit) {
        // reduce the decimal places of the calculation to that of the maximum character limit if the calculation resulted in a decimal
        if (calculatedNumber % 1 != 0) {
            calculatedString = limitDecimalPlaces(calculatedNumber, calculatedString);
        }
        // if calculation resulted in breaking the character limit, prevent the calculation from proceeding
        else {
            displayError("resultCharLimit")
            return displayValue;
        }
    }
    console.log("Calculation: " + first + " " + operator + " " + second + " = " + calculatedString);
    return calculatedString;
}

function operate(firstNum, operator, secondNum) {
    if (operator === "+") {
        result = add(firstNum, secondNum);
    }
    else if (operator === "-") {
        result = subtract(firstNum, secondNum);
    }
    else if (operator === "*") {
        result = multiply(firstNum, secondNum);
    }
    else if (operator === "/") {
        result = divide(firstNum, secondNum);
    }
    return result;
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
    if (secondNum === 0) {
        displayError("divByZero");
        return displayValue;
    }
    return firstNum / secondNum;
}

function limitDecimalPlaces(number, string) {
    let decimalPosition;
    for (i = 0; i < string.length; i++) {
        if (string[i] === ".") {
            decimalPosition = i;
        } 
    }
    // returns a number rounded to the max decimal places allowed by the current char limit (this is returned as a string due to toFixed)
    return number.toFixed(charLimit - 1 - decimalPosition);
}

function displayError(type) {
    if (type === "charLimitReached") {
        errorMessage.textContent = "Character limit of " + charLimit + " reached, please use C or AC to reduce the number of characters";
        console.log("Error: Character limit of " + charLimit + " reached");
    }
    else if (type === "divByZero") {
        errorMessage.textContent = "You cannot divide a number by zero!";
        console.log("Error: Attempted to divide by zero");
    }
    else if (type === "resultCharLimit") {
        errorMessage.textContent = "Operation result exceeds character limit of " + charLimit;
        console.log("Error: Operation result exceeds character limit of " + charLimit);
    }
    else if (type === "operatorLimit") {
        errorMessage.textContent = "Only one operator is allowed at a time";
        console.log("Error: more than 1 operator")
    }
    else if (type === "decimalLimit") {
        errorMessage.textContent = "Only one decimal for each number in the operation";
        console.log("Error: More than 1 decimal in the current number")
    }
    else if (type === "operatorAtCharLimit") {
        errorMessage.textContent = "Cannot place operator since the character limit of " + charLimit + " will be reached, preventing you from adding additional numbers";
        console.log("Error: Cannot place operator at the character limit of " + charLimit);
    }
}
