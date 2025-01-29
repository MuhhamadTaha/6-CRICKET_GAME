function generateComputerChoice() {
  let random_Num = Math.random() * 3;
  if (random_Num > 0 && random_Num <= 1) {
    return "BAT";
  }
  else if (random_Num > 1 && random_Num <= 2) {
    return  "BALL";
  } 
  else {
    return  "WICKET";
  }
}
function getResult(userMove , computerMove){
  if (userMove === 'BAT'){
    if(computerMove === 'BALL'){
      score.win ++;
      return 'YOU WIN 🥳 🥇';
    }else if(computerMove === 'BAT'){
      score.tie ++;
      return 'MATCH TIE 😑';
    }else if(computerMove === 'WICKET'){
      score.lost ++;
      return 'YOU LOSS ☹️';
    }
  }
  else if (userMove === 'BALL'){
    if(computerMove === 'BALL'){
      score.tie ++;
      return 'MATCH TIE 😑';
    }else if(computerMove === 'BAT'){
      score.lost ++;
      return 'YOU LOSS ☹️';
    }else if(computerMove === 'WICKET'){
      score.win ++;
      return 'YOU WIN 🥳 🥇';
    }
  }
  else{
    if(computerMove === 'BALL'){
      score.lost ++;
      return 'YOU LOSS ☹️';
    }else if(computerMove === 'BAT'){
      score.win ++;
      return 'YOU WIN 🥳 🥇';
    }else if(computerMove === 'WICKET'){
      score.tie ++;
      return 'MATCH TIE 😑';
    }
  }
}
function showResult(userMove, computerMove, result){
  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('#user-move').innerText =
  userMove !== undefined ? `You have chosen the ${userMove}` : '';

  document.querySelector('#computer-move').innerText =        computerMove !== undefined ? `Computer has chosen the ${computerMove}` : '';

  document.querySelector('#result').innerText =
  result !== undefined ? `${result}` : '';
  document.querySelector('#score').innerText = ` ${score.displayOfScore()}`;

}

let score ;
let scoreStr = localStorage.getItem('score');

function resetScore (scoreStr){
  score = scoreStr ? JSON.parse(scoreStr) : {
    win : 0,
    lost : 0,
    tie : 0, 
  };
  score.displayOfScore = function(){
    return `NUMBER OF MATCHES WON : ${score.win}, LOST : ${score.lost}, TIE : ${score.tie}`;
  };
  showResult();
};
resetScore(scoreStr);
