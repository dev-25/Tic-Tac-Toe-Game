// HTML Elements
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

// game constants
const xSymbol = '×';
const oSymbol = '○';

// game variables
let gameIsLive = true;
let xIsNext = true;


// functions
const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

const handleWin = (letter) => {
  gameIsLive = false;
  if (letter === 'x') {
    statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
  } else {
    statusDiv.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`;
  }
};

const checkGameStatus = () => {
  const a1 = cellDivs[0].classList[1];
  const a2 = cellDivs[1].classList[1];
  const a3 = cellDivs[2].classList[1];
  const a4 = cellDivs[3].classList[1];
  const a5 = cellDivs[4].classList[1];
  const b1 = cellDivs[5].classList[1];
  const b2 = cellDivs[6].classList[1];
  const b3 = cellDivs[7].classList[1];
  const b4 = cellDivs[8].classList[1];
  const b5 = cellDivs[9].classList[1];
  const c1 = cellDivs[10].classList[1];
  const c2 = cellDivs[11].classList[1];
  const c3 = cellDivs[12].classList[1];
  const c4 = cellDivs[13].classList[1];
  const c5 = cellDivs[14].classList[1];
  const d1 = cellDivs[15].classList[1];
  const d2 = cellDivs[16].classList[1];
  const d3 = cellDivs[17].classList[1];
  const d4 = cellDivs[18].classList[1];
  const d5 = cellDivs[19].classList[1];
  const e1 = cellDivs[20].classList[1];
  const e2 = cellDivs[21].classList[1];
  const e3 = cellDivs[22].classList[1];
  const e4 = cellDivs[23].classList[1];
  const e5 = cellDivs[24].classList[1];

  // check winner
  // for rows
  if (a1 && a1 === a2 && a1 === a3 && a1 === a4 && a1 === a5) {
    handleWin(a1);
    cellDivs[0].classList.add('won');
    cellDivs[1].classList.add('won');
    cellDivs[2].classList.add('won');
    cellDivs[3].classList.add('won');
    cellDivs[4].classList.add('won');
  } 
  else if (b1 && b1 === b2 && b1 === b3 && b1 === b4 && b1 === b5) {
    handleWin(b1);
    cellDivs[5].classList.add('won');
    cellDivs[6].classList.add('won');
    cellDivs[7].classList.add('won');
    cellDivs[8].classList.add('won');
    cellDivs[9].classList.add('won');
  }
  else if (d1 && d1 === b2 && d1 === b3 && d1 === b4 && d1 === b5) {
    handleWin(d1);
    cellDivs[15].classList.add('won');
    cellDivs[16].classList.add('won');
    cellDivs[17].classList.add('won');
    cellDivs[18].classList.add('won');
    cellDivs[19].classList.add('won');
  }
  else if (c1 && c1 === c2 && c1 === c3 && c1 === c4 && c1 === c5) {
    handleWin(c1);
    cellDivs[10].classList.add('won');
    cellDivs[11].classList.add('won');
    cellDivs[12].classList.add('won');
    cellDivs[13].classList.add('won');
    cellDivs[14].classList.add('won');
  }else if (e1 && e1 === e2 && e1 === e3 && e1 === e4 && e1 === e5) {
    handleWin(e1);
    cellDivs[20].classList.add('won');
    cellDivs[21].classList.add('won');
    cellDivs[22].classList.add('won');
    cellDivs[23].classList.add('won');
    cellDivs[24].classList.add('won');
  }
  
  //for columns
  else if (a1 && a1 === b1 && a1 === c1 && a1 === d1 && a1 === e1) {
    handleWin(a1);
    cellDivs[0].classList.add('won');
    cellDivs[5].classList.add('won');
    cellDivs[10].classList.add('won');
    cellDivs[15].classList.add('won');
    cellDivs[20].classList.add('won');
  }
   else if (a2 && a2 === b2 && a2 === c2 && a2 === d2 && a2 === e2) {
    handleWin(a2);
    cellDivs[1].classList.add('won');
    cellDivs[6].classList.add('won');
    cellDivs[11].classList.add('won');
    cellDivs[16].classList.add('won');
    cellDivs[21].classList.add('won');
  } else if (a3 && a3 === b3 && a3 === c3 && a3 === d3 && a3 === e3) {
    handleWin(a3);
    cellDivs[2].classList.add('won');
    cellDivs[7].classList.add('won');
    cellDivs[12].classList.add('won');
    cellDivs[17].classList.add('won');
    cellDivs[22].classList.add('won');
  } else if (a4 && a4 === b4 && a4 === c4 && a4 === d4 && a4 === e4) {
    handleWin(a4);
    cellDivs[3].classList.add('won');
    cellDivs[8].classList.add('won');
    cellDivs[13].classList.add('won');
    cellDivs[18].classList.add('won');
    cellDivs[23].classList.add('won');
  }else if (a5 && a5 === b5 && a5 === c5 && a5 === d5 && a5 === e5) {
    handleWin(a5);
    cellDivs[4].classList.add('won');
    cellDivs[9].classList.add('won');
    cellDivs[14].classList.add('won');
    cellDivs[19].classList.add('won');
    cellDivs[24].classList.add('won');
  }
  
  //for diagonals
  else if (a1 && a1 === b2 && a1 === c3 && a1 === d4 && a1 === e5) {
    handleWin(a1);
    cellDivs[0].classList.add('won');
    cellDivs[6].classList.add('won');
    cellDivs[12].classList.add('won');
    cellDivs[18].classList.add('won');
    cellDivs[24].classList.add('won');
  }
  else if (a5 && a5 === b4 && a5 === c3 && a5 === d2 && a5 === e1) {
    handleWin(a5);
    cellDivs[4].classList.add('won');
    cellDivs[8].classList.add('won');
    cellDivs[12].classList.add('won');
    cellDivs[16].classList.add('won');
    cellDivs[20].classList.add('won');
  }
  
  
  
  
  else if (a1 && a2 && a3 && a4 && a5 && b1 && b2 && b3 && b4 && b5 && c1 && c2 && c3 && c4 && c5 && d1 && d2 && d3 && d4 && d5 && e1 && e2 && e3 && e4 && e5) {
    gameIsLive = false;
    statusDiv.innerHTML = 'Game is tied!';
  } else {
    xIsNext = !xIsNext;
    if (xIsNext) {
      statusDiv.innerHTML = `${xSymbol} is next`;
    } else {
      statusDiv.innerHTML = `<span>${oSymbol} is next</span>`;
    }
  }
};


// event Handlers
const handleReset = () => {
  xIsNext = true;
  statusDiv.innerHTML = `${xSymbol} is next`;
  for (const cellDiv of cellDivs) {
    cellDiv.classList.remove('x');
    cellDiv.classList.remove('o');
    cellDiv.classList.remove('won');
  }
  gameIsLive = true;
};

const handleCellClick = (e) => {
  const classList = e.target.classList;

  if (!gameIsLive || classList[1] === 'x' || classList[1] === 'o') {
    return;
  }

  if (xIsNext) {
    classList.add('x');
    checkGameStatus();
  } else {
    classList.add('o');
    checkGameStatus();
  }
};


// event listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener('click', handleCellClick)
}