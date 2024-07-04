// Select elements.
let buttons = document.querySelector("#rpc-container");
let msg = document.querySelector("#message");

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
    };
};

// Function for playing entire game.
function playGame() {
    // Function for playing one round.
    function playRound(computer, user) {
        if ((computer === "rock" && user === "paper") 
        || (computer === "paper" && user === "scissors")
        || (computer === "scissors" && user === "rock")) {
            return "You win";
        };
        
        if ((computer === "paper" && user === "rock")
        || (computer === "rock" && user === "scissors")
        || (computer === "scissors" && user === "paper")) {
            return "You lose";
        };

        return "Draw";
    };

    // Set up the game.
    let computerScore = 0;
    let userScore = 0;
    let round = 1;

    // Game loop.
    // Add buttons listener.
    buttons.addEventListener("click", (event) => {
        let target = event.target;
        let userChoice = null;
        let computerChoice = getComputerChoice();

        switch (target.id) {
            case "rock":
                userChoice = "rock";
                break;
            case "paper":
                userChoice = "paper";
                break;
            case "scissors":
                userChoice = "scissors";
                break;
        };

        // Play a round.
        let result = playRound(computerChoice, userChoice);

        // Increment winner's score or replay the round, if result is draw.
        if (result === "You win") {
            userScore++;
        } else if (result === "You lose") {
            computerScore++;
        } else {
            msg.textContent = `Round ${round}: no winner.`;
        };

        // Print round results.
        msg.textContent = `Round ${round}: ${result} (computer - ${computerChoice}, \
        user - ${userChoice}, score: ${computerScore} - ${userScore})`;

        round++;
        
        // Print final scores of the game.
        if (userScore >= 5 || computerScore >= 5) {
            let finalScore = `Computer: ${computerScore}, You: ${userScore}.`;
    
            // Print a final message.
            if (userScore > computerScore) {
                alert(finalScore + " You win the game. Congrats.");
            } else {
                alert(finalScore + " Computer wins the game. Try again.");
            };
            
            // Reset the game.
            round = 1;
            computerScore = 0;
            userScore = 0;
            msg.textContent = "Choose Rock, Parer or Scissors.";
        };
    });
};

// Play the game.
playGame();
