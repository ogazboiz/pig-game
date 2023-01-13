'use strict';
const player_0 = document.querySelector('.player--0');
const player_1 = document.querySelector('.player--1');
const scoreEl_0 = document.querySelector('#score--0');
const scoreEl_1 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentscore_0 = document.getElementById('current--0');
const currentscore_1 = document.getElementById('current--1');

//initial score

scoreEl_0.textContent = 0;
scoreEl_1.textContent = 0;
diceEl.classList.add('hidden');
let score = 0;
let totalScore = [0, 0];
let activePlayer = 0;
//switch player
let switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  score = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player_0.classList.toggle('player--active');
  player_1.classList.toggle('player--active');
};
btnDice.addEventListener('click', function () {
  diceEl.classList.remove('hidden');
  let diceNumber = Math.trunc(Math.random() * 6 + 1);
  diceEl.src = `images/dice-${diceNumber}.png`;
  if (diceNumber !== 1) {
    score = score + diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent = score;
  } else {
    switchPlayer();
  }
});
btnHold.addEventListener('click', function () {
  totalScore[activePlayer] = totalScore[activePlayer] + score;
  document.getElementById(`score--${activePlayer}`).textContent =
    totalScore[activePlayer];
  //switch player
  switchPlayer();
});
