class Portfolio {
  constructor() {
    this.gameContainer = document.querySelector('.game-place__game');
    this.gameContainerHead = document.querySelector('.game-place__header');

    this.createItems();
    this.setListeners();
    this.addGame(LIST_OF_GAMES[0]);
  }

  createItems() {
    const itemsContainer = document.querySelector('.slider__container');
    const items = [];
    for (let i = 1; i < LIST_OF_GAMES.length; i++) {
      items[i] = new Item(i, LIST_OF_GAMES[i]);
      itemsContainer.append(items[i].element);
      items[i].element.addEventListener('click', () => {
        this.gameContainer.hidden = false;
        this.addGame(LIST_OF_GAMES[i]);
      });
    }
  }

  setListeners() {
    const slider = document.querySelector('.slider__container');
    const arrowRight = document.querySelector('.slider__right');
    const arrowleft = document.querySelector('.slider__left');
    const shiftAmount = LIST_OF_GAMES.length - 4;

    arrowleft.addEventListener('click', function() {
      const movement = getComputedStyle(slider);
      const shift = parseInt(movement.marginLeft);
      if (shift < 0) {
        slider.style.marginLeft = shift + CARD_SIZE + 'px';
      }
    });

    arrowRight.addEventListener('click', function() {
      const movement = getComputedStyle(slider);
      const shift = parseInt(movement.marginLeft);
      if (shift > -CARD_SIZE * shiftAmount) {
        slider.style.marginLeft = shift - CARD_SIZE + 'px';
      }
    });
  }

  addGame(item) {
    this.gameContainerHead.innerHTML = `
    <div class="game-place__game__name"><span class="sterssed">
    ${item.name}
    </span></div>
      <div class="game-place__game__text">${item.desriptionText}</div>
    `;

    item.startFunction(this.gameContainer);
  }
}
new Portfolio();

// game15(gameContainer);

// init(gameContainer);

// initSolitare(gameContainer);
