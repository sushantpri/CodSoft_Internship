// Variables to store input
let displayValue = '';
let currentOperator = null;
let result = null;

// Function to update display
function updateDisplay(value) {
    document.getElementById('display').innerText = value;
}

// Append number to display
function appendNumber(number) {
    displayValue += number;
    updateDisplay(displayValue);
}

// Append operator to display
function appendOperator(operator) {
    if (displayValue === '') return;
    if (currentOperator) {
        calculateResult();
    }
    displayValue += ` ${operator} `;
    currentOperator = operator;
    updateDisplay(displayValue);
}

// Append dot to handle decimal numbers
function appendDot() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay(displayValue);
    }
}

// Calculate result
function calculateResult() {
    try {
        result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay(displayValue);
        currentOperator = null;
    } catch (e) {
        updateDisplay('Error');
    }
}

// Clear the display
function clearDisplay() {
    displayValue = '';
    updateDisplay('0');
}

// Delete last character from display
function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay(displayValue || '0');
}
