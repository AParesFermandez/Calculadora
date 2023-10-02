// Función para actualizar el valor en el display
function updateDisplay(value) {
    var displayDiv = document.querySelector("#display");
    displayDiv.innerText = value;
}

// Función para manejar los números y el punto decimal
function press(key) {
    const currentValue = document.getElementById('display').textContent;

    // Evitar agregar más de un punto decimal
    if (key === '.' && currentValue.includes('.')) {
        return;
    }

    // Evitar que el número comience con múltiples ceros
    if (currentValue === '0' && key !== '.') {
        updateDisplay(key);
    } else {
        updateDisplay(currentValue + key);
    }
}

// Función para establecer el operador
let operator = '';
let firstOperand = '';

function setOP(op) {
    firstOperand = document.getElementById('display').textContent;
    operator = op;
    updateDisplay('0');
}

// Función para borrar
function clr() {
    updateDisplay('0');
    operator = '';
    firstOperand = '';
}

// Función para realizar el cálculo
function calculate() {
    const secondOperand = document.getElementById('display').textContent;
    let result = 0;

    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            if (secondOperand === '0') {
                updateDisplay('Error');
                return;
            }
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }

    updateDisplay(result.toString());
    operator = '';
    firstOperand = '';
}

