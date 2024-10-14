// Welcome Message
console.log("Welcome to Rock Paper Scissors Game!");
console.info(`Please choose one of the following option number when prompted:
    1. Rock
    2. Paper
    3. Scissors`)
console.log("Type play() in console to start the game!");

function play() {    
    // Continuously loop the game for user's input until user types 'q'
    while (true) {
        // Ask user to enter 1, 2 or 3 where 1 means rock, 2 means paper, 3 means scissors or 'q' for quit
        console.log(`Please choose one of the following option number:
            1. Rock
            2. Paper
            3. Scissors`);
        
        let option = prompt("Enter option(q for quit)");
        
        if(option === 'q') break;
        
        let option_number = parseInt(option);

        // Check if the entered input is valid or not
        if(option === null || option_number === NaN || option_number < 0 || option_number > 3) {
            // If it is invalid, provide a warning telling the user to input proper input and loop again
            console.warn("Please enter a valid option number or 'q' for quit!");
            continue;
        }
    
        // If it is valid, use a random number out of 1, 2 or 3 by the computer
        let computer_option = Math.floor((Math.random() * 3) + 1);
        console.log(computer_option);

        let winner;

        if(option_number === computer_option) winner = "Tie";
        
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
        switch (option_number) {
            case 1:
                switch (computer_option) {
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

        // Alert the winner and loop continues
        if(winner === "Tie") alert("It is a tie!");
        else alert(`Winner is ${winner}!`);
    }
    console.log("Thank you for playing!");
}

