let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//generateTarget function
//generate random number 0-9

const generateTarget = () => {
    return Math.floor(Math.random() * 9);
  }
  
  
  //compareGuesses function determine which guess is closest to target
  
  const compareGuesses = (humanGuess, computerGuess, target) => {
  
    if((Math.abs(humanGuess-target)) < (Math.abs(computerGuess-target))){
      return true;
  
    }
    
    else if((Math.abs(humanGuess-target)) > (Math.abs(computerGuess-target))){
      return false;
  
    }
    
    else if((Math.abs(humanGuess-target)) === (Math.abs(computerGuess-target))){
      return true;
  
    }
  }

  //updateScore function increase winners score after each round
  
  const updateScore = winner => {
    if(winner === "human"){
      humanScore ++;
    }
  
    else if(winner === "computer"){
      computerScore ++;
  
    }
  }
  
  //advanceRound function update the round number
  
  const advanceRound = () => {
  
    currentRoundNumber ++;
    
  }
  
  
  
      
  