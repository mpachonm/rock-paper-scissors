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

const playerSelection = prompt("Please enter rock, paper or scissors:").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));