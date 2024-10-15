const button = document.getElementById('btn');
const output = document.getElementById('output');
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');

// Function to initialize the form on page load
function initializeForm() {
    // Clear the text and delay inputs
    textInput.value = '';
    delayInput.value = '';

    // Clear the output div
    output.textContent = '';
}

// Async function to display the message after the specified delay
async function displayMessage() {
    // Retrieve the values dynamically each time the button is clicked
    const text = textInput.value;
    const delay = parseInt(delayInput.value, 10);

    // Validate the delay input
    if (isNaN(delay) || delay < 0) {
        alert('Please enter a valid non-negative number for the delay.');
        return;
    }

    // Clear previous output before setting the new one (optional)
    output.textContent = '';

    // Introduce the delay before displaying the message
    await new Promise((resolve) => {
        setTimeout(resolve, delay * 1000); // Multiply delay by 1000 to convert to milliseconds
    });

    // Update the output text after the delay
    output.textContent = text;
}

// Attach the event listener to the button
button.addEventListener('click', displayMessage);

// Initialize the form when the page loads
window.addEventListener('load', initializeForm);
