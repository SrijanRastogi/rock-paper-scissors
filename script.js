function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let input = prompt("Enter your Choice:");
    console.log("Your Move: " + input);

    input = input.toLowerCase();

    if (
        input !== "rock" &&
        input !== "paper" &&
        input !== "scissors"
    ) {
        return "ERROR, Please Enter Proper Input";
    }

    return input;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log("Tie!");
            return;
        }

        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||

            (humanChoice === "paper" && computerChoice === "rock") ||

            (humanChoice === "scissors" && computerChoice === "paper")
        ) {

            humanScore++;
            console.log("Human Wins");

        }

        else {

            computerScore++;
            console.log("Computer Wins");

        }

        console.log("Human:", humanScore);
        console.log("Computer:", computerScore);
    }

    // Round 1
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log("Computer's Move: " + computerSelection);
    playRound(humanSelection, computerSelection);

    // Round 2
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log("Computer's Move: " + computerSelection);
    playRound(humanSelection, computerSelection);

    // Round 3
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log("Computer's Move: " + computerSelection);
    playRound(humanSelection, computerSelection);

    // Round 4
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log("Computer's Move: " + computerSelection);
    playRound(humanSelection, computerSelection);

    // Round 5
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log("Computer's Move: " + computerSelection);
    playRound(humanSelection, computerSelection);

    console.log("----------------------");
    console.log("Final Score");
    console.log("Human:", humanScore);
    console.log("Computer:", computerScore);

    if (humanScore > computerScore) {
        console.log("Human Wins the Game!");
    }

    else if (computerScore > humanScore) {
        console.log(" Computer Wins the Game!");
    }

    else {
        console.log("The Game Ends in a Tie!");
    }
}

playGame();