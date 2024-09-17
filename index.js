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

  // Mark starting coordinate as visited
  visited[start[0]][start[1]] = true;
  // Initialize the queue with the starting coordinate
  queue.push([start]);

  while (queue.length) {
    // Dequeue the front path
    let path = queue.shift();
    // Get the last coordinate in the current path
    let curr = path[path.length - 1];

    // If the coordinate is the end coordinate, return the path
    if (curr[0] === end[0] && curr[1] === end[1]) {
      // Format 'path' since template literal converts it to a string
      const formattedPath = path
        .map(subArray => `[${subArray.join(', ')}]`)
        .join(' -> ');
      return `You made it in ${path.length} moves! Here's your path: 
      ${formattedPath}`;
    }

    // If neighbor (current coordinate + offset) is on the board and not already visited
    offsets.forEach(([x, y]) => {
      if (
        curr[0] + x >= 0 &&
        curr[0] + x < 8 &&
        curr[1] + y >= 0 &&
        curr[1] + y < 8 &&
        !visited[curr[0] + x][curr[1] + y]
      ) {
        // Mark as visited
        visited[curr[0] + x][curr[1] + y] = true;
        // Create a new path including the neighbor and add to queue
        queue.push([...path, [curr[0] + x, curr[1] + y]]);
      }
    });
  }
}

console.log(knightMoves([3, 3], [0, 0]));
