// Get references to the HTML elements
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const btn = document.getElementById('btn');
const outputDiv = document.getElementById('output');

// Define the async function
async function showMessageWithDelay() {
  // Get the text and delay values from the inputs
  const text = textInput.value;
  const delay = parseInt(delayInput.value);

  // Clear the input values
  textInput.value = '';
  delayInput.value = '';

  // Wait for the specified delay
  await new Promise(resolve => setTimeout(resolve, delay));

  // Display the message on the webpage
  outputDiv.innerText = text;
}

// Add event listener to the button
btn.addEventListener('click', showMessageWithDelay);