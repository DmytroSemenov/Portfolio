'use strict';
function game15(initElement) {
  function createNewTable() {
    initElement.innerHTML = `
        <table class="container"></table>
        <button class="restart">START NEW GAME</button>
        <div class="winner15"><span class="win">You win!</span></div>
        `;

    const table = document.querySelector('.container');
    table.innerHTML = '';

    for (let i = 0; i < 4; i++) {
      const tr = document.createElement('tr');

      for (let j = 0; j < 4; j++) {
        tr.appendChild(document.createElement('td'));
      }

      table.appendChild(tr);
    }

    let tds = document.querySelectorAll('td');
    for (let i = 0; i < tds.length; i++) {
      if (arrayInitialLocations[i] === 0) {
        tdEmpty = tds[i];
        continue;
      }
      tds[i].innerHTML = arrayInitialLocations[i];
    }
  }


  function createLayoutOfNumbers() {
    const arrayOfNumbers = [];
    for (let i = 0; i < 16; i++) {
      arrayOfNumbers[i] = i;
    }
    return arrayOfNumbers.sort((a, b) => Math.random() - 0.5);
  }


  function isValidArrayOfNumbers(arrayTested) {
    if (!arrayTested) return;
    let arr = arrayTested.slice();
    let result = Math.round((arr.indexOf(0) + 1) / 4);
    arr[arr.indexOf(0)] = 16;

    for (let i = 0; i < 16; i++) {
      let newArr = arr.filter(elem => elem < arr[i]);
      result += newArr.length;
      arr[i] = 16;
    }

    return !(result % 2);
  }

  function testWin() {
    const tds = document.querySelectorAll('td');
    for (let i = 1; i < 16; i++) {
      if (tds[i - 1].innerHTML != i) return;
    }
    document.querySelector('.winner15').style.display = 'flex';
  }

  //     first run

  let tdEmpty;
  let arrayInitialLocations = [];

  for (let i = 1; i < 16; i++) {
    arrayInitialLocations.push(i);
  }
  arrayInitialLocations.push(0);
  createNewTable();
  document.querySelector('.winner15').style.display = 'none';

  //    event handling

  initElement.addEventListener('click', function(event) {
    let $el = event.target;
    if ($el.tagName === 'BUTTON') {
      arrayInitialLocations = null;

      while (!isValidArrayOfNumbers(arrayInitialLocations)) {
        arrayInitialLocations = createLayoutOfNumbers();
      }

      createNewTable();

    }

    if ($el.tagName === 'TD' && $el.innerHTML !== '') {
      if (
        ($el.parentNode.rowIndex === tdEmpty.parentNode.rowIndex &&
          Math.abs($el.cellIndex - tdEmpty.cellIndex) === 1) ||
        ($el.cellIndex === tdEmpty.cellIndex &&
          Math.abs($el.parentNode.rowIndex - tdEmpty.parentNode.rowIndex) === 1)
      ) {
        tdEmpty.innerHTML = $el.innerHTML;
        $el.innerHTML = '';
        tdEmpty = $el;
      }
    }

    testWin();
  });
}
