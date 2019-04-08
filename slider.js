'use strict';
const slider = document.querySelector('.slider__container');
const arrowRight = document.querySelector('.slider__right');
const arrowleft = document.querySelector('.slider__left');

arrowleft.onclick = function() {
  const movement = getComputedStyle(slider);
  const shift = parseInt(movement.marginLeft);
  if (shift < 0) {
    slider.style.marginLeft = shift + 425 + 'px';
  }
};

arrowRight.onclick = function() {
  const movement = getComputedStyle(slider);
  const shift = parseInt(movement.marginLeft);
  if (shift > -425) {
    slider.style.marginLeft = shift - 425 + 'px';
  }
};

const gameContainer = document.querySelector('.game-place__game');

// game15(gameContainer);

init(gameContainer);

// new Game(gameContainer);

