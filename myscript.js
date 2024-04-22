function getComputerChoice() {
    let choice_num=Math.floor(Math.random() * 3);
    if (choice_num==0){
        choice="Rock";
      }
    else if (choice_num==1){
        choice="Paper";
      }
    else choice="Scissors";
    return choice;
  }

let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("ppr");
let scissorsButton = document.getElementById("scrs");
let playerPick="";

let playerChoice=()=>{
  rockButton.addEventListener("click",function(){
    playerPick="rock";
  });
  paperButton.addEventListener("click",function(){
    playerPick="paper";
  });
  scissorsButton.addEventListener("click",function(){
    playerPick="scissors";
  });
}


function playRound(playerSelection, computerSelection) {
  
    if (playerSelection=="rock" && computerSelection=="Paper"){
        return "You Lose! Paper beats Rock";
      }
    else if (playerSelection=="paper" && computerSelection=="Rock"){
        return "You win! Paper beats Rock";
      }
    else if (playerSelection=="paper" && computerSelection=="Scissors"){
        return "You lose! Scissors beat paper";
      }
    else if (playerSelection=="scissors" && computerSelection=="Paper"){
        return "You win! Scissors beat paper";
      }
    else if (playerSelection=="scissors" && computerSelection=="Rock"){
        return "You lose! Rock beats scissors";
      }
    else if (playerSelection=="rock" && computerSelection=="Scissors"){
        return "You win! Rock beats scissors";
      }
    else if (playerSelection==computerSelection.toLowerCase()){
        return "Tie!";
      }
    else return "Choice not possible";
  }
  function playGame() {
    let rounds = 0;
    const maxRounds = 5; // Number of rounds to play

    // Function to handle button click event
    function handleClick(playerSelection) {
      if (rounds >= maxRounds) {
        return; // Stop further processing if max rounds reached
    }
        let computerSelection = getComputerChoice();
        console.log("Player chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        rounds++;
        if (rounds === maxRounds) {
            endGame();
        }
    }
console.log(rounds);
    // Set up event listeners for buttons
    let rockButton = document.getElementById("rock");
    rockButton.addEventListener("click", function() {
        handleClick("rock");
    });

    let paperButton = document.getElementById("ppr");
    paperButton.addEventListener("click", function() {
        handleClick("paper");
    });

    let scissorsButton = document.getElementById("scrs");
    scissorsButton.addEventListener("click", function() {
        handleClick("scissors");
    });

    // Function to execute at the end of the game
    function endGame() {
        console.log("Game Over!");
        // Remove event listeners to prevent further clicks
        rockButton.removeEventListener("click", handleClick);
        paperButton.removeEventListener("click", handleClick);
        scissorsButton.removeEventListener("click", handleClick);
        
    }
}

// Call playGame after the page is loaded to ensure all elements are available
document.addEventListener("DOMContentLoaded", playGame);