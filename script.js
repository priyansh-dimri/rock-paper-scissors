// Welcome Message
console.log("Welcome to Rock Paper Scissors Game!");
console.info(`Please choose one of the following option number when prompted:
    1. Rock
    2. Paper
    3. Scissors`)
console.log("Type play() in console to start the game!");

let human_score = 0, 
    computer_score = 0;

// Ask user to enter 1, 2 or 3 where 1 means rock, 2 means paper, 3 means scissors or 'q' for quit
function getHumanChoice() {
    console.log(`Please choose one of the following option number:
    1. Rock
    2. Paper
    3. Scissors`);
    
    let human_choice = prompt("Enter option(q for quit)");

    return human_choice;
}

// Validate input
function isValidHumanChoice(choice) {
    if(choice === null || choice === "" || isNaN(choice)) return false;

    let choice_number = parseInt(choice);

    if(choice_number < 0 || choice_number > 3) return false;

    return true;
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
            switch (computer_option) {
                case 1:
                    winner = "User";
                    break;
                case 3:
                    winner = "Computer";
                    break;
            }
            break;
        case 3:
            switch (computer_option) {
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

// Function to alert the winner
function printResult(winner) {
    if(winner === "Tie") alert("It is a tie!");
    else alert(`Winner is ${winner}!`);
}

// Function to modify the scores of user or computer based on winner
function modifyScores(winner) {
    if(winner === "User") human_score++;
    else if(winner === "Computer") computer_score++;
}

function play() {
    
    // Continuously loop the game for user's input until user types 'q'
    while (true) {
        // Get human choice
        let human_choice = getHumanChoice();

        // If option is `q`, the loop is broken
        if(human_choice === 'q') break;

        // Check for the human choice validity
        let isValid = isValidHumanChoice(option);

        // If the user choice is invalid, warning message is provided and loop is looped again
        if(!isValid){
            console.warn("Please enter a valid option number or 'q' for quit!");
            continue;
        }

        // Convert the `option` string to number
        let human_choice_number = parseInt(option);

        // If it is valid, use a random number out of 1, 2 or 3 by the computer
        let computer_choice_number = generateComputerChoice();
        
        // Get winner using human and computer choice
        let winner = getWinner(human_choice_number, computer_choice_number);

        // Print the result of rock-paper-scissors game
        printResult(winner);

        // Modify user and computer scores after each round
        modifyScores(winner);
    }

    // Thank you message after the game is completed
    console.log("Thank you for playing!");
}

