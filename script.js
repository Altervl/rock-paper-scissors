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

// Get computer and user inputs.
const computerChoice = getComputerChoice();
const userChoice = getUserChoice();

// Function for plaing one round.
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

result = playRound(computerChoice, userChoice);
console.log(`${result}\ncomputer: ${computerChoice}, user: ${userChoice}`)

// TODO:
// Run for 5 rounds in total.
// Print "<user/computer> wins tha game".