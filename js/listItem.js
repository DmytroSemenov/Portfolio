class Item {
  constructor(
    number,
    { name, thumbImg, thumbAlt, desriptionText, startFunction }
  ) {
    this.element = document.createElement('div');
    this._number = number;
    this.name = name;
    this._thumbImg = thumbImg;
    this._thumbAlt = thumbAlt;
    this.desriptionText = desriptionText;

    this.startFunction = startFunction;

    this._render();
  }

  _render() {
    this.element.className = 'slider__element';
    this.element.innerHTML = `
        <div class="slider__element__number">
            <span class="sterssed">0${this._number}</span>
        </div>
        <div class="slider__element__name">
            ${this.name}
        </div>
        <img src="${this._thumbImg}" alt="${this._thumbAlt}" />
        <div class="slider__element__text">
            ${this.desriptionText}
        </div>
    `;
  }
}
