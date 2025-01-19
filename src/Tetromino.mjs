export class Tetromino {
  constructor(grid) {
    this.grid = Object.freeze(grid.map(row => Object.freeze([...row])));
  }

  static T_SHAPE = new Tetromino([
    ['.', 'T', '.'],
    ['T', 'T', 'T'],
    ['.', '.', '.'],
  ]);

  rotateRight() {
    let gridSize = this.grid.length;
    let rotatedGrid = Array.from({ length: gridSize }, () => Array(gridSize).fill(null));;
     for (let row = 0; row < gridSize; row++) {
         for (let col = 0; col < gridSize; col++) {
             rotatedGrid[col][gridSize - row - 1] = this.grid[row][col];
            }
          }
     return new Tetromino(rotatedGrid);
  }
  
 rotateLeft() {
  let gridSize = this.grid.length;
  let rotatedGrid = Array.from({ length: gridSize }, () => Array(gridSize).fill(null));;
   for (let row = 0; row < gridSize; row++) {
       for (let col = 0; col < gridSize; col++) {
        rotatedGrid[gridSize - col - 1][row] = this.grid[row][col];
      }
    }
   return new Tetromino(rotatedGrid);
  }
  toString() {
    return this.grid.map(row => row.join('')).join('\n') + '\n';
  }
}
