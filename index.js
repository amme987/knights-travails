// let board = [];
// for (let i = 0; i < 8; i++) {
//   board.push([]);
//   for (let j = 0; j < 8; j++) {
//     board[i].push([i, j]);
//   }
// }

// console.log(board);

// knightMoves([0,0],[3,3]) == [[0,0],[2,1],[3,3]] or knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]
// knightMoves([3,3],[0,0]) == [[3,3],[2,1],[0,0]] or knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]
// knightMoves([0,0],[7,7]) == [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]] or knightMoves([0,0],[7,7]) == [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]

// Directions knight can move
let offsets = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];

function knightMoves(start, end) {
  // let visited = new Array(64).fill(false);
  let visited = [start];
  let queue = [start];

  // while (queue) {
  let curr = queue.shift();

  // If current coordinate + offset is on the board, push the resulting corrdinate into queue and visited array
  offsets.forEach(([x, y]) => {
    if (
      curr[0] + x >= 0 &&
      curr[0] + x < 8 &&
      curr[1] + y >= 0 &&
      curr[1] + y < 8
    ) {
      visited.push([curr[0] + x, curr[1] + y]);
      queue.push([curr[0] + x, curr[1] + y]);
    }
  });
  return queue;
  // }
}

console.log(knightMoves([0, 0], [3, 3]));
