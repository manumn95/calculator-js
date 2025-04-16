// Kindly do not modify the prewritten code.
// Your task is to implement the functions below to make the calculator work.

let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    // TODO: Implement the clearDisplay function
    // This function should reset the currentInput and update the display
    currentInput='';
    display.textContent=0;
}

function deleteLast() {
    // TODO: Implement the deleteLast function
    // This function should remove the last character from currentInput and update the display
    currentInput = currentInput.slice(0,-1);
    display.textContent = currentInput;
}

function appendNumber(number) {
    // TODO: Implement the appendNumber function
    // This function should add the given number to currentInput and update the display
   
    if (currentInput === '0' && number !== '.') {
        currentInput = number; // Replace starting zero
    } 
    else {
        currentInput += number; // Normal append
    }
    display.textContent = currentInput;
}

function appendOperator(operator) {
    // TODO: Implement the appendOperator function
    // This function should add the given operator to currentInput and update the display
    if(currentInput === '')return;
    const lastChar = currentInput.slice(-1);
    if('+-*/%'.includes(lastChar))
    {
        currentInput=currentInput.slice(0,-1)+operator;
    }
    else{
        currentInput+=operator;
    }
    display.textContent=currentInput;
}

function calculateResult() {
    // First, check if currentInput contains a percentage operator
    if (currentInput.includes('%')) {
        // Replace the percentage operator with division by 100
        currentInput = currentInput.replace(/(\d+)%/g, (match, p1) => {
            return (parseFloat(p1) / 100).toString();
        });
    }
    
    try {
        // Now we evaluate the expression using eval (make sure the input is safe!)
        const result = eval(currentInput);
        
        // If evaluation is successful, display the result
        display.textContent = result;
        
        // Optionally update currentInput to the result for further calculations
        currentInput = result.toString();
    } catch (error) {
        // In case of any error (invalid input), display an error message
        display.textContent = "Error";
        currentInput = '';  // Optionally reset the input
    }
}
