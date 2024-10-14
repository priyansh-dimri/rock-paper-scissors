// Welcome Message
console.log("Welcome to Rock Paper Scissors Game!");
console.info(`Please choose one of the following option number when prompted:
    1. Rock
    2. Paper
    3. Scissors`)
console.log("Type play() in console to start the game!");

// Ask user to enter 1, 2 or 3 where 1 means rock, 2 means paper, 3 means scissors or 'q' for quit
function getHumanChoice() {
    console.log(`Please choose one of the following option number:
    1. Rock
    2. Paper
    3. Scissors`);
    
    let option = prompt("Enter option(q for quit)");

    return option;
}

// Validate input
function isValidHumanChoice(option) {
    if(option === null || option === "" || isNaN(option)) return false;

    let option_number = parseInt(option);

    if(option_number < 0 || option_number > 3) return false;

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

function play() {    
    // Continuously loop the game for user's input until user types 'q'
    while (true) {
        // Get human choice
        let option = getHumanChoice();
        
        if(option === 'q') break;

        let isValid = isValidHumanChoice(option);

        if(!isValid){
            console.warn("Please enter a valid option number or 'q' for quit!");
            continue;
        }
        
        let option_number = parseInt(option);

        // If it is valid, use a random number out of 1, 2 or 3 by the computer
        let computer_choice = generateComputerChoice();
        
        // Get winner using human and computer choice
        let winner = getWinner(option_number, computer_choice);

        printResult(winner);
    }
    console.log("Thank you for playing!");
}

