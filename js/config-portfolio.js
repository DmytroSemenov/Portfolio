'use strict';
const CARD_SIZE = 425;

const LIST_OF_GAMES = [
  {
    name: 'Домашки',
    thumbImg: '',
    thumbAlt: '',
    desriptionText:
      'Вы можете выбрать любую из моих домашек и посмотреть, как она работает.',
    startFunction: ()=>{}
  },
  {
    name: 'Пятнашки',
    thumbImg: 'img/15-thumb.png',
    thumbAlt: '15',
    desriptionText:
      'Перемещая костяшки по коробке, добиться упорядочивания их по номерам, желательно сделав как можно меньше перемещений.',
    startFunction: game15
  },
  {
    name: 'Лабиринт',
    thumbImg: 'img/maze-thumb.png',
    thumbAlt: 'maze',
    desriptionText:
      'Строит лабиринт с заданным размером и ищет кратчайший путь.',
    startFunction: init
  },
  {
    name: 'Косынка',
    thumbImg: 'img/solitare-thumb.png',
    thumbAlt: 'solitaire',
    desriptionText:
      'Цель игры — разложить карты по мастям в порядке от туза до короля в четыре стопки.',
    startFunction: initSolitare
  },
  {
    name: 'Пятнашки',
    thumbImg: 'img/15-thumb.png',
    thumbAlt: '15',
    desriptionText:
      'Перемещая костяшки по коробке, добиться упорядочивания их по номерам, желательно сделав как можно меньше перемещений.',
    startFunction: game15
  }
];
