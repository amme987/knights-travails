function knightMoves() {}

let board = [];
for (let i = 0; i < 8; i++) {
  board.push([]);
  for (let j = 0; j < 8; j++) {
    board[i].push([i, j]);
  }
}

console.log(board);

// let board = Array.from({ length: 8 }, () => new Array(0, 1, 2, 3, 4, 5, 6, 7));
// // board.forEach(value => (value = Array.from({ length: 8 }, () => '')));
// // console.log(board);
// console.log(board[1][2]);
