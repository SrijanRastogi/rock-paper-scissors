function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let gameOver = false;
    
    const result = document.querySelector("#result");

    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");
    const resetButton = document.querySelector("#reset");

    rockButton.addEventListener("click", function() {  
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice); });

    paperButton.addEventListener("click", function() {  
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice); });

    scissorsButton.addEventListener("click", function() {  
    const computerChoice = getComputerChoice();
    playRound("scissors", computerChoice); });

    resetButton.addEventListener("click", function () {
    humanScore = 0;
    computerScore = 0;
    gameOver = false;

    result.innerHTML =
        "Choose Your Weapon<br>" +
        "Human: 0<br>" +
        "Computer: 0";
});

    function playRound(humanChoice, computerChoice) {
          if( gameOver === true) {
            return;
          }
          



        if (humanChoice === computerChoice) {
            result.innerHTML = "Tie<br>" + "Human: " + humanScore + "<br>" +  "Computer: " + computerScore;
            return;
        }

        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||

            (humanChoice === "paper" && computerChoice === "rock") ||

            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            result.innerHTML = "Human Wins<br>" + "Human: " + humanScore + "<br>" +  "Computer: " + computerScore;
        }
        else {
            computerScore++;
            result.innerHTML = "Computer Wins<br>" +    "Human: " + humanScore + "<br>" + "Computer: " + computerScore;
        }

        if( humanScore === 5 ) {
        gameOver = true;
       result.innerHTML= "Human Wins the Game<br>" +    "Human: " + humanScore + "<br>" + "Computer: " + computerScore;
    }

        else if(computerScore === 5) {
        gameOver = true;
        result.innerHTML = "Computer Wins the game<br>" +    "Human: " + humanScore + "<br>" + "Computer: " + computerScore;

    }
    }

    }

playGame();
