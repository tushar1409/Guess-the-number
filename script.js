'use strict';

//TRIAL OF HTML AND CSS
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number🎉';
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

//RANDOM SECRET NUMBER BETWEEN 1 AND 20 THAT IS GENERATED AT THE START OF NEW GAME
let secretNum = Math.trunc(Math.random() * 20) + 1;

//TARGET SCORE
let score = 20;
let bestscore = 20;

//document.querySelector('.number').textContent = secretNum;

//EVENT LISTENER FUNCTION HAVING CLICK AS AN EVENT THAT WILL BE NEEDED TO BE CLICKED BY THE USER IN ORDER TO INPUT HIS GUESSED NUMBER
document.querySelector('.check').addEventListener(
  'click',
  //EVENT HANDLER FUNCTION USING DOM MANIPULATION TO ACTUALLY HANDLE WHAT HAPPENS IF THE BUTTON IS CLICKED
  function () {
    const num = Number(document.querySelector('.guess').value);
    console.log(num, typeof num);

    if (!num) {
      document.querySelector('.message').textContent =
        'Kindly enter the number!';
    } else if (num === secretNum && score !== 20) {
      document.querySelector('.message').textContent =
        'Your guess is correct🎉';
      document.querySelector('body').style.backgroundColor = '#488696';
      document.querySelector('.number').textContent = secretNum;
      //IMPLEMENTING HIGH SCORE
      if (score < bestscore) {
        bestscore = score;
        document.querySelector('.highscore').textContent = bestscore;
      }
    } else if (num > secretNum) {
      document.querySelector('.message').textContent = 'Guess is too high!🙁 ';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (num < secretNum) {
      document.querySelector('.message').textContent = 'Guess is too low!🙁 ';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (num === secretNum && score === 20) {
      document.querySelector('.message').textContent =
        'Perfect guess in 1st attempt!!!🤩🤩';
      document.querySelector('body').style.backgroundColor = '#488696';
      document.querySelector('.number').textContent = secretNum;
      //IMPLEMENTING HIGH SCORE
      if (score < bestscore) {
        bestscore = score;
        document.querySelector('.highscore').textContent = bestscore;
      }
    }
  }
);

//IMPLEMENTING AGAIN RESET BUTTON

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '??';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#333';
});
