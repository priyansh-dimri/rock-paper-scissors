// Global variables for human and computer scores
let human_score = 0,
  computer_score = 0,
  current_round = 1;

// Function to return the number related to each buttonId and 4 for invalid ID
function getHumanChoiceNumber(buttonId) {
  if (buttonId === "rock") return 1;
  else if (buttonId === "paper") return 2;
  else if (buttonId === "scissors") return 3;
  else return 4;
}

// Generate random number from 0 to 3
function generateComputerChoice() {
  return Math.floor(Math.random() * 3 + 1);
}

function getChoiceName(choice_number) {
  switch (choice_number) {
    case 1:
      return "ROCK";
    case 2:
      return "PAPER";
    default:
      return "SCISSORS";
  }
}

function displayChoices(human_choice_number, computer_choice_number) {
  const human_choice_container = document.querySelector(
    ".human-choice-container"
  );
  const computer_choice_container = document.querySelector(
    ".computer-choice-container"
  );

  human_choice_container.textContent = `You chose ${getChoiceName(
    human_choice_number
  )}`;
  computer_choice_container.textContent = `Computer chose ${getChoiceName(
    computer_choice_number
  )}`;
}

// Calculate winner using human and computer choice
function getWinner(humanChoice, computerChoice) {
  let winner;

  if (humanChoice === computerChoice) winner = "Tie";

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
  const winnerContainer = document.querySelector(".winner-container");

  winnerContainer.textContent = winner_text;
}

// Function to alert the winner
function displayWinner() {
  if (human_score === computer_score) {
    modifyWinner("IT IS A TIE! 🎉");
  } else if (human_score > computer_score) {
    modifyWinner("YOU WON! 🥳");
  } else {
    modifyWinner("COMPUTER WON! 🤖");
  }
}

// Function to modify the scores of user or computer based on winner
function modifyScores(winner) {
  if (winner === "User") human_score++;
  else if (winner === "Computer") computer_score++;

  const current_round_result_container = document.querySelector(
    `.round-${current_round}-winner`
  );
  current_round_result_container.textContent = winner;
}

// Function to reset all values and revert the state of game to fresh state
function resetAllValues() {
  // Revert the values of human_score, computer_score and current_round to original state
  human_score = 0;
  computer_score = 0;
  current_round = 1;

  // Clear the text content of all rounds results
  for (let i = 1; i <= 5; ++i) {
    const current_round_result_container = document.querySelector(
      `.round-${i}-winner`
    );
    current_round_result_container.textContent = "";
  }

  // Clear out the winner of 5 rounds
  const result_container = document.querySelector(".winner-container");
  result_container.textContent = "";

  // Clear out the human choice and computer choices data
  const human_choice_container = document.querySelector(
    ".human-choice-container"
  );
  const computer_choice_container = document.querySelector(
    ".computer-choice-container"
  );

  human_choice_container.textContent = "";
  computer_choice_container.textContent = "";
}

function play(buttonId) {
  if (current_round === 6) {
    resetAllValues();
  }

  let human_choice_number = getHumanChoiceNumber(buttonId);

  if (human_choice_number === 4) {
    alert("Invalid choice!");
    return;
  }

  // If it is valid, use a random number out of 1, 2 or 3 by the computer
  let computer_choice_number = generateComputerChoice();

  // Get winner using human and computer choice
  let winner = getWinner(human_choice_number, computer_choice_number);

  displayChoices(human_choice_number, computer_choice_number);

  // Modify user and computer scores after each round
  modifyScores(winner);

  if (current_round === 5) {
    // Print the result of rock-paper-scissors game
    displayWinner();
  }

  current_round++;
}

const humanChoiceButtons = document.querySelectorAll(".rps-option");
const resetButton = document.querySelector(".reset-button");

// Calls the play function with button id for each of the rock, paper and scissor buttons
humanChoiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    play(button.id);
  });
});

resetButton.addEventListener("click", () => {
  resetAllValues();
});
