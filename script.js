const button = document.getElementById('btn');
const output = document.getElementById('output');

async function displayMessage() {
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value, 10);

    if (isNaN(delay) || delay < 0) {
        alert('Please enter a valid non-negative number for the delay.');
        return;
    }

    await new Promise((resolve) => {
        setTimeout(resolve, delay * 1000);
    });

    output.textContent = text;
}

button.addEventListener('click', displayMessage);
