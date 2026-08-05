
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
    let input = prompt("Enter your Choice:");
    console.log("Your Move: " + input)
    input = input.toLowerCase();
    if( input !== "rock" && input !== "paper" && input !== "scissors") {
        return "ERROR, Please Enter Proper Input"
    }

        return input;

}

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;


function playGame() {

    function playRound(humanChoice, computerChoice) {
   
    if ( humanChoice === computerChoice ) {
        return ("Tie!");
    }

    else if( humanChoice === "rock" && computerChoice === "scissors" || 
            
        humanChoice === "paper" && computerChoice === "rock" || 
        
        humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return ("Human Wins");
       
    }

    else { computerScore++; 
        return("Computer wins");
        }

    } 

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log("Computer's Move: " + computerSelection);
    const result = playRound(humanSelection, computerSelection);
    console.log(result);
    console.log("Human:", humanScore);
    console.log("Computer:", computerScore);

    roundsPlayed++;
    
    if (roundsPlayed === 5) {
    if (humanScore > computerScore) {
        console.log("Human Wins the Game!");
    } else if (computerScore > humanScore) {
        console.log("Computer Wins the Game!");
    } else {
        console.log("It's a Tie!");
    }
}

}

playGame();
playGame();
playGame();
playGame();
playGame();

