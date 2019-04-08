'use strict';
const CARD_SIZE = 425;
const slider = document.querySelector('.slider__container');
const arrowRight = document.querySelector('.slider__right');
const arrowleft = document.querySelector('.slider__left');

arrowleft.onclick = function() {
  const movement = getComputedStyle(slider);
  const shift = parseInt(movement.marginLeft);
  if (shift < 0) {
    slider.style.marginLeft = shift + CARD_SIZE + 'px';
  }
};

arrowRight.onclick = function() {
  const movement = getComputedStyle(slider);
  const shift = parseInt(movement.marginLeft);
  if (shift > -CARD_SIZE) {
    slider.style.marginLeft = shift - CARD_SIZE + 'px';
  }
};

const gameContainer = document.querySelector('.game-place__game');

// game15(gameContainer);

init(gameContainer);

// new Game(gameContainer);

