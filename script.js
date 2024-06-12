// Function for getting computer choice for a round.
function getComputerChoice() {
    let number = Math.random() * 100;

    if (number < 35) {
        return "rock";
    }
    else if (number >= 35 && number <= 65) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
// Function for getting user choice for a round.
function getUserChoice() {
    let answer = prompt("Rock, paper or scissors?");
    // Make the value case insensitive.
    return answer.toLowerCase();
}

// Function for playing entire game.
function playGame() {
    // Function for playing one round.
    function playRound(computer, user) {
        if ((computer === "rock" && user === "paper") 
        || (computer === "paper" && user === "scissors")
        || (computer === "scissors" && user === "rock")) {
            return "You win";
        }
        
        if ((computer === "paper" && user === "rock")
        || (computer === "rock" && user === "scissors")
        || (computer === "scissors" && user === "paper")) {
            return "You lose";
        }

        return "Draw";
    }

    // Scores.
    let computerScore = 0;
    let userScore = 0;

    // Game loop.
    for (i = 0; i < 5; i++) {
        console.log(`Round ${i}`);

        // Get computer and user inputs.
        let computerChoice = getComputerChoice();
        let userChoice = getUserChoice();

        // Play one round.
        result = playRound(computerChoice, userChoice);

        // Print the result.
        console.log(`${result}\ncomputer: ${computerChoice}, user: ${userChoice}`);

        // Increment winner's score or replay the round, if result is draw.
        if (result === "You win") {
            userScore++;
        } else if (result === "You lose") {
            computerScore++;
        } else {
            console.log("No winner, repeat.");
            i--;
        }
    }

    // Print final scores of the game.
    console.log(`Computer: ${computerScore}, You: ${userScore}`);

    // Print a final message.
    if (userScore > computerScore) {
        console.log("You win the game. Congrats.");
    } else {
        console.log("Computer wins the game. Try again.");
    }
}

// Play the game.
playGame();
