'use strict';
// document.querySelector('.highscore').textContent = 1;
// console.log(document.querySelector('.highscore').textContent);

// document.querySelector('body').setAttribute('background-color', '#ddd');
// // document.querySelector('.number').textContent = Number(
// //   prompt('Please enter your fav number.')
// // );

function checkScore() {
  if (document.querySelector('.score').textContent <= 1) {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent = 'You lost the Game';
    document.querySelector('.check').disabled = true;
    document.querySelector('.guess').disabled = true;
    return true;
  }
  return false;
}

let enteredNumber = 0;
const randNumberGenerator = () => Math.floor(Math.random() * 20) + 1;
let randNumber = randNumberGenerator();
// alert(randNumber);
const checkInput = document
  .querySelector('.check')
  .addEventListener('click', function () {
    let newScore = (currScore) => currScore - 1;
    enteredNumber = Number(document.querySelector('.guess').value);
    //   alert(`${randNumber}, ${enteredNumber}`);
    if (enteredNumber < 0 || enteredNumber > 20 || !enteredNumber) {
      alert('Please enter number between 1-20!');
    } else if (enteredNumber === randNumber) {
      document.querySelector('.message').textContent = 'Yeah, Correct Number';
      if (
        document.querySelector('.highscore').textContent <
        document.querySelector('.score').textContent
      ) {
        document.querySelector('.highscore').textContent =
          document.querySelector('.score').textContent;
      }
      document.querySelector('.number').textContent = randNumber;
      document.querySelector('body').style.background = 'green';
      document.querySelector('.check').disabled = true;
      document.querySelector('.guess').disabled = true;
    } else if (enteredNumber && enteredNumber < randNumber) {
      checkScore();
      if (!checkScore()) {
        document.querySelector('.message').textContent = 'Too Low';
        document.querySelector('.score').textContent = newScore(
          document.querySelector('.score').textContent
        );
      }
    } else if (enteredNumber && enteredNumber > randNumber) {
      checkScore();
      if (!checkScore()) {
        document.querySelector('.message').textContent = 'Too High';
        document.querySelector('.score').textContent = newScore(
          document.querySelector('.score').textContent
        );
      }
    }
    // else {
    //     alert('Please enter Number between ');
    //   }
  });

document.querySelector('.again').addEventListener('click', function () {
  //randNumber = Math.floor(Math.random() * 20) + 1;
  randNumber = randNumberGenerator();
  document.querySelector('.number').textContent = '?';
  if (
    document.querySelector('.highscore').textContent <
    document.querySelector('.score').textContent
  ) {
    document.querySelector('.highscore').textContent =
      document.querySelector('.score').textContent;
  }
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = '#222';
  document.querySelector('.check').disabled = false;
  document.querySelector('.guess').disabled = false;
});
