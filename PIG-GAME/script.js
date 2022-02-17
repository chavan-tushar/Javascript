'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnRollEL = document.querySelector('.btn--roll');
const currentScore0EL = document.getElementById('current--0');
const currentScore1EL = document.getElementById('current--1');
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const btnHoldEL = document.querySelector('.btn--hold');
let currentPlayer = 0;
let currentScore0 = 0;
let currentScore1 = 0;
let mainScorePlayer0 = 0;
let mainScorePlayer1 = 0;

// Starting Conditions
const startingConditions = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;

  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');

  currentScore0EL.textContent = 0;
  currentScore1EL.textContent = 0;

  currentScore0 = 0;
  currentScore1 = 0;

  btnHoldEL.disabled = false;
  btnHoldEL.style.backgroundColor = 'white';

  btnRollEL.style.backgroundColor = 'white';
  btnRollEL.disabled = false;

  diceEL.classList.add('hidden');

  currentPlayer = 0;
};

startingConditions();
document
  .querySelector('.btn--new')
  .addEventListener('click', startingConditions);

const checkCurrentPlayer = function () {
  return currentPlayer == 0 ? 0 : 1;
};

const gameFinish = function () {
  btnHoldEL.disabled = true;
  btnHoldEL.style.backgroundColor = 'grey';
  btnRollEL.style.backgroundColor = 'grey';
  btnRollEL.disabled = true;
  diceEL.classList.add('hidden');
  player0EL.classList.remove('player--active');
  player1EL.classList.remove('player--active');
};

const changingPlayer = function (player) {
  if (player == 0) {
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
    currentScore0 = 0;
    currentScore0EL.textContent = currentScore0;
    currentPlayer = 1;
  } else {
    player1EL.classList.toggle('player--active');
    player0EL.classList.toggle('player--active');
    currentScore1 = 0;
    currentScore1EL.textContent = currentScore1;
    currentPlayer = 0;
  }
};

//rolling a dice
btnRollEL.addEventListener('click', function () {
  diceEL.classList.remove('hidden');
  let randNum = Math.round(Math.random() * 5) + 1;
  diceEL.src = `./img/dice-${randNum}.png`;
  if (randNum != 1) {
    // Updating Current score
    if (!checkCurrentPlayer()) {
      currentScore0 += randNum;
      currentScore0EL.textContent = currentScore0;
    } else {
      currentScore1 += randNum;
      currentScore1EL.textContent = currentScore1;
    }
  } else {
    // setting current Score to 0 and changing player--active
    changingPlayer(currentPlayer);
  }
});

btnHoldEL.addEventListener('click', function () {
  if (!checkCurrentPlayer()) {
    score0El.textContent = Number(score0El.textContent) + currentScore0;
    changingPlayer(currentPlayer);
    if (Number(score0El.textContent) >= 100) {
      alert('Player 1 Won the game');
      gameFinish();
    }
  } else {
    score1El.textContent = Number(score1El.textContent) + currentScore1;
    changingPlayer(currentPlayer);
    if (Number(score1El.textContent) >= 100) {
      alert('Player 2 Won the game');
      gameFinish();
    }
  }
});
