let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 9);
  }
  
  
  
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
  
  const updateScore = winner => {
    if(winner === "human"){
      humanScore ++;
    }
  
    else if(winner === "computer"){
      computerScore ++;
  
    }
  }
  
  
  const advanceRound = () => {
  
    currentRoundNumber ++;
    
  }
  
  
  
      
  