// Function to change background color
function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

// Counter functionality
let counter = 0;
function incrementCounter() {
    counter++;
    document.getElementById('counter').textContent = counter;
}

// Calculator functionality
function performOperation() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('results').textContent = 'Please enter valid numbers.';
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num2 !== 0 ? (num1 / num2).toFixed(2) : 'Infinity';
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('results').textContent = `Result: ${result}`;
}

// Random quote functionality
const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "The only way to do great work is to love what you do."
];
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}