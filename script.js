// Global variables for human and computer scores
let human_score = 0, 
    computer_score = 0;

// Welcome Message
console.log("Welcome to Rock Paper Scissors Game!");
console.info(`Please choose one of the following option number when prompted:
    1. Rock
    2. Paper
    3. Scissors`)
console.log("Type play() in console to start the game!");

function getHumanChoiceNumber(buttonId) {
    if(buttonId === 'rock') return 1;
    else if(buttonId === 'paper') return 2;
    else if(buttonId === 'scissors') return 3;
    else return 4;
}

// Generate random number from 0 to 3
function generateComputerChoice() {
    return Math.floor((Math.random() * 3) + 1);
}

// Calculate winner using human and computer choice
function getWinner(humanChoice, computerChoice) {
    let winner;

    if(humanChoice === computerChoice) winner = "Tie";
    
    // Check the following:
    // User Computer Winner
    // 1    1        Tie
    // 1    2        Computer
    // 1    3        User
    // 2    1        User
    // 2    2        Tie
    // 2    3        Computer
    // 3    1        Computer
    // 3    2        User
    // 3    3        Tie
    switch (humanChoice) {
        case 1:
            switch (computerChoice) {
                case 2:
                    winner = "Computer";
                    break;
                case 3:
                    winner = "User";
                    break;
            }
            break;
        case 2:
            switch (computerChoice) {
                case 1:
                    winner = "User";
                    break;
                case 3:
                    winner = "Computer";
                    break;
            }
            break;
        case 3:
            switch (computerChoice) {
                case 1:
                    winner = "Computer";
                    break;
                case 2:
                    winner = "User";
                    break;
            }
            break;
    }

    return winner;
}

function modifyWinner(winner_text) {
    const winnerContainer = document.querySelector('.winner-container');

    winnerContainer.textContent = winner_text;
}

// Function to alert the winner
function displayWinner(winner) {
    if(winner === "Tie") modifyWinner("It is a tie!");
    else modifyWinner(`Winner is ${winner}!`);
}

// Function to modify the scores of user or computer based on winner
function modifyScores(winner, human_score, computer_score) {
    if(winner === "User") human_score++;
    else if(winner === "Computer") computer_score++;
}

// Function to display the scores of user and computer
function displayScores(human_score, computer_score) {
    console.log(`Your Score: ${human_score}\nComputer Score: ${computer_score}`);
}

function play(buttonId) {
    let human_choice_number = getHumanChoiceNumber(buttonId);

    if(human_choice_number === 4){
        alert("Invalid choice!");
        return;
    }

    // If it is valid, use a random number out of 1, 2 or 3 by the computer
    let computer_choice_number = generateComputerChoice();
    
    // Get winner using human and computer choice
    let winner = getWinner(human_choice_number, computer_choice_number);

    // Print the result of rock-paper-scissors game
    displayWinner(winner);

    // Modify user and computer scores after each round
    modifyScores(winner, human_score, computer_score);

    // Display the scores after each round
    displayScores(human_score, computer_score);

    // Thank you message after the game is completed
    console.log("Thank you for playing!");
}

const humanChoiceButtons = document.querySelectorAll('.rps-option');

// Calls the play function with button id for each of the rock, paper and scissor buttons
humanChoiceButtons.forEach((button) => {

    button.addEventListener('click', () => {
        play(button.id);
    })
})