// GET computer input.
function getComputerChoice() {
    // GET a random number.
    let number = Math.random() * 100;

    // IF the number < 35, return "rock",
    if (number < 35) {
        return "rock";
    }
    // ELSEIF number >= 35 AND number <= 65, returt "paper",
    else if (number >= 35 && number <= 65) {
        return "paper";
    }
    // ELSE return "scissors".
    else {
        return "scissors";
    }
}

console.groupCollapsed("Test input");
console.log(getComputerChoice());

// GET user input.
function getHumanChoice() {
    // GET answer from the user and return it in low case.
    let answer = prompt("Rock, paper or scissors?\nCancel to end the game.") || "cancel";
    return answer.toLowerCase();
}

console.log(getHumanChoice());
console.groupEnd();

// IF user input beats computer input, PRINT "user wins", 
// ELSEIF otherwise, PRINT "computer wins", 
// ELSEIF user input is equal to computer input, PRINT "draw", repeat the round.
// Run FOR 5 rounds in total.
// PRINT "<user/computer> wins tha match".