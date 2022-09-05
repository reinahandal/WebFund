var number1; // number before operator
var number2; // number after operator
var operator;
var currentNumber = ""; // to concatenate the numbers displayed

function getDisplay() { // helps us reuse this code to access display within other functions
    return document.getElementById('display');
}

function press(number) {
    // var getDisplay = document.getElementById('display'); // access display
    currentNumber += number; // turns string into float, float bc the calculator also needs to work with floats not only integers
    // += so that when we add a number it doesnt delete previous
    if (operator) {
        number2 = parseFloat(currentNumber);
    } 
    else {
        number1 = parseFloat(currentNumber); 
    }
    getDisplay().innerText = currentNumber; // this one is a string bc of innertext
}
function setOP(op) {
    operator = op;
    currentNumber = "";
    getDisplay().innerText = "0";
}
function clr() {
    currentNumber = "";
    number1 = 0;
    number2 = 0;
    operator = undefined;
    getDisplay().innerText = "0";
}
function calculate() {
    var result;
    if (operator === "+") {
        result = number1 + number2;
    } else if (operator === "-") {
        result = number1 - number2;

    } else if (operator === "/") {
        result = number1 / number2;

    } else if (operator === "*") {
        result = number1 * number2;
    }
    getDisplay().innerText = result;
}

