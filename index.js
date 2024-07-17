function addingEventListener() {
    // Select the button element by its ID
    const button = document.getElementById('yourButtonId'); // Replace 'yourButtonId' with the actual ID of your button

    // Define the callback function to be executed when the button is clicked
    function handleClick() {
        console.log('Button clicked!');
    }

    // Add the event listener to the button
    if (button) {
        button.addEventListener('click', handleClick);
    }
    const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
}



// Export the function for testing purposes
if (typeof module !== 'undefined') {
    module.exports = addingEventListener;
}
