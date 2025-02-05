// Script da calculadora

var display = document.getElementById('display');

// Adicionar ao display
function addToDisplay(input) {
    display.value += input;
}

// Limpar display
function clearDisplay() {
    display.value = '';
}

// Executar operações
function calculate() {
    try {
        display.value = eval(display.value)
    }
    catch (error) {
        display.value = 'Error';
        alert('Error: ' + error.message);
    }
}