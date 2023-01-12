'use strict';
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

btnDice.addEventListener('click', function () {
  diceEl.classList.remove('hidden');
  let diceNumber = Math.trunc(Math.random() * 6 + 1);
  diceEl.src = `images/dice-${diceNumber}.png`;
  score = score + diceNumber;
  currentscore_0.textContent = score;
});
