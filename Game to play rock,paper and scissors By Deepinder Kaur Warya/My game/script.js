document.addEventListener('DOMContentLoaded', function () {
    // This function runs when the DOM content is fully loaded
    // It ensures that the JavaScript code inside it executes only after the HTML content is loaded and ready

    // Get references to the HTML elements with the IDs 'startBtn', 'exitBtn', and 'result'
    const startBtn = document.getElementById('startBtn');
    const exitBtn = document.getElementById('exitBtn');
    const resultDiv = document.getElementById('result');

    // Add event listeners to the 'startBtn' and 'exitBtn' elements, so when they are clicked, corresponding functions will execute
    startBtn.addEventListener('click', startGame);
    exitBtn.addEventListener('click', exitGame);

    // Function to start the game
    function startGame() {
        // Hide the 'startBtn' and show the 'exitBtn' when the game starts
        startBtn.style.display = 'none';
        exitBtn.style.display = 'inline-block';
        
        // Clear any previous game result displayed in the 'resultDiv'
        resultDiv.innerHTML = '';

        // Prompt the user to input their choice (1 for Rock, 2 for Paper, or 3 for Scissors)
        const userChoice = prompt('Press 1 for Rock, 2 for Paper, or 3 for Scissors:');
        
        // Validate the user input
        if (userChoice !== '1' && userChoice !== '2' && userChoice !== '3') {
            alert('Invalid input! Please press 1, 2, or 3.');
            startGame(); // If the input is invalid, prompt again until valid input is received
            return;
        }
        
        // Generate a random choice for the computer (1 for Rock, 2 for Paper, or 3 for Scissors)
        const computerChoice = Math.floor(Math.random() * 3) + 1;
        
        // Determine the game result based on the user's and computer's choices
        let result;
        if (userChoice === computerChoice.toString()) {
            result = 'It\'s a tie!';
            resultDiv.className = 'alert alert-tie show'; // Add class for styling tie result
        } else if ((userChoice === '1' && computerChoice === 3) ||
                   (userChoice === '2' && computerChoice === 1) ||
                   (userChoice === '3' && computerChoice === 2)) {
            // Explanation for winning scenarios
            if (userChoice === '1' && computerChoice === 3) {
                result = 'You win! Rock crushes Scissors.';
            } else if (userChoice === '2' && computerChoice === 1) {
                result = 'You win! Paper covers Rock.';
            } else {
                result = 'You win! Scissors cut Paper.';
            }
            resultDiv.className = 'alert alert-win show'; // Add class for styling win result
        } else {
            // Explanation for losing scenarios
            if (userChoice === '1' && computerChoice === 2) {
                result = 'You lose! Paper covers Rock.';
            } else if (userChoice === '2' && computerChoice === 3) {
                result = 'You lose! Scissors cut Paper.';
            } else {
                result = 'You lose! Rock crushes Scissors.';
            }
            resultDiv.className = 'alert alert-lose show'; // Add class for styling lose result
        }
        
        // Display the game result in the 'resultDiv'
        resultDiv.textContent = result;
    }

    // Function to exit the game
    function exitGame() {
        // Show the 'startBtn' and hide the 'exitBtn' when the game is exited
        startBtn.style.display = 'inline-block';
        exitBtn.style.display = 'none';
        
        // Clear the game result displayed in the 'resultDiv'
        resultDiv.innerHTML = '';
    }
});
