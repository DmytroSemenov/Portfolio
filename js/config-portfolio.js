'use strict';
const LIST_OF_GAMES = [
  {
    name: 'Homeworks',
    thumbImg: '',
    thumbAlt: '',
    desriptionText: 'You can choose any of my homework and see how it works.',
    startFunction: () => {}
  },
  {
    name: '15',
    thumbImg: 'img/15-thumb.jpg',
    thumbAlt: '15',
    desriptionText:
      'Moving the knuckles around the box, to achieve ordering them by numbers, preferably making as few moves as possible.',
    startFunction: game15
  },
  {
    name: 'The Maze',
    thumbImg: 'img/maze-thumb.jpg',
    thumbAlt: 'maze',
    desriptionText:
      'The app builds a maze with a given size and looks for the shortest path.',
    startFunction: init
  },
  {
    name: 'Solitaire',
    thumbImg: 'img/solitare-thumb.jpg',
    thumbAlt: 'solitaire',
    desriptionText:
      'The first objective is to release and play into position certain cards to build up each foundation, in sequence and in suit, from the ace through the king. The ultimate objective is to build the whole pack onto the foundations.',
    startFunction: initSolitare
  },
  {
    name: '15',
    thumbImg: 'img/15-thumb.jpg',
    thumbAlt: '15',
    desriptionText:
      'Moving the knuckles around the box, to achieve ordering them by numbers, preferably making as few moves as possible.',
    startFunction: game15
  },
  {
    name: 'Homeworks',
    thumbImg: '',
    thumbAlt: '',
    desriptionText: 'You can choose any of my homework and see how it works.',
    startFunction: () => {}
  },
  {
    name: '15',
    thumbImg: 'img/15-thumb.jpg',
    thumbAlt: '15',
    desriptionText:
      'Moving the knuckles around the box, to achieve ordering them by numbers, preferably making as few moves as possible.',
    startFunction: game15
  },
  {
    name: 'The Maze',
    thumbImg: 'img/maze-thumb.jpg',
    thumbAlt: 'maze',
    desriptionText:
      'The app builds a maze with a given size and looks for the shortest path.',
    startFunction: init
  },
  {
    name: 'Solitaire',
    thumbImg: 'img/solitare-thumb.jpg',
    thumbAlt: 'solitaire',
    desriptionText:
      'The first objective is to release and play into position certain cards to build up each foundation, in sequence and in suit, from the ace through the king. The ultimate objective is to build the whole pack onto the foundations.',
    startFunction: initSolitare
  },
  {
    name: '15',
    thumbImg: 'img/15-thumb.jpg',
    thumbAlt: '15',
    desriptionText:
      'Moving the knuckles around the box, to achieve ordering them by numbers, preferably making as few moves as possible.',
    startFunction: game15
  }
];
