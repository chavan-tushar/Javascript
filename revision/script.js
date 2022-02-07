'use strict';

let secretNumber = 0;
let score = 20;

function calcSecretNumber() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
}

calcSecretNumber();
let highScore = document.querySelector('.Highscore').innerHTML;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  calcSecretNumber();
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').innerHTML = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
});

document.querySelector('.check').addEventListener('click', function () {
  let guessedNumber = Number(document.querySelector('.guess').value);
  if (!guessedNumber) {
    alert('Please enter the number');
  } else {
    if (score > 1) {
      score--;
      if (secretNumber !== guessedNumber) {
        let messageToDisplay =
          secretNumber < guessedNumber ? 'Too High!' : 'Too Low!';
        document.querySelector('.message').textContent = messageToDisplay;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You Won!';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').innerHTML = secretNumber;
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
          highScore = score;
          document.querySelector('.Highscore').innerHTML = highScore;
        }
      }
    } else {
      document.querySelector('.message').textContent = 'Game End!';
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
    }
  }
});
