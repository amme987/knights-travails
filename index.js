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
  let visited = Array.from({ length: 8 }, () => Array(8).fill(false));
  let queue = [];

  visited[start[0]][start[1]] = true;
  queue.push(start);

  while (queue.length) {
    // console.log(queue[0]);
    let curr = queue.shift();
    console.log(curr);

    if (curr[0] === end[0] && curr[1] === end[1]) {
      return queue;
    }
    // console.log(curr);
    // If current coordinate + offset is on the board and not already visited, push the resulting coordinate into queue and visited array
    offsets.forEach(([x, y]) => {
      // console.log(queue);
      // console.log(`visited: ${visited[curr[0] + x][curr[1] + y]}`);
      // console.log(`${[curr[0] + x, curr[1] + y]}`);

      if (
        curr[0] + x >= 0 &&
        curr[0] + x < 8 &&
        curr[1] + y >= 0 &&
        curr[1] + y < 8 &&
        !visited[curr[0] + x][curr[1] + y]
        // !visited.includes([curr[0] + x, curr[1] + y])
      ) {
        // console.log('ugh');
        visited[curr[0] + x][curr[1] + y] = true;
        queue.push([curr[0] + x, curr[1] + y]);
      }
    });
  }
}

console.log(knightMoves([0, 0], [3, 3]));
