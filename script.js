let number1 = '';
let number2 = '';
let operator = '';
let showResult = false;
const display = document.querySelector(".display");
const numberBtn = document.querySelectorAll(".numbers");
const operatorBtn = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const decimalBtn = document.querySelector(".decimal");

function add(num1, num2) {
    return num1 + num2;
};
function subtract(num1, num2) {
    return num1 - num2;
};
function multiply(num1, num2) {
    return num1 * num2;
};
function divide(num1, num2) {
    return num1 / num2;
};

function operate() {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    let result = '';
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        }
        display.textContent = Math.round(result * 1000) / 1000;
        showResult = true;
};
function appendDisplay(value) {
    display.textContent += value;
}
function clearDisplay() {
    display.textContent = '';
    number1 = '';
    number2 = '';
    operator = '';
}
numberBtn.forEach((element) => {
    element.addEventListener("click", () => {
        if (showResult) {
            clearDisplay();
            showResult = false;
        }
        appendDisplay(element.textContent);
        if (!operator) {
            number1 += element.textContent;
        } else {
            number2 += element.textContent;
        }
    })
});
operatorBtn.forEach((element) => {
    element.addEventListener("click", () => {
        if (number1 && !operator) {
            operator = element.textContent;
            appendDisplay(operator);
        }
    })
});
clearBtn.addEventListener("click", () => {
    clearDisplay();
})
equalsBtn.addEventListener("click", () => {
    if (number1 && number2 && operator) {
        operate();
    }
})

decimalBtn.addEventListener("click", () => {
    if (!display.includes(".")) {
        display.textContent += ".";
    }
})