export class Tetromino {
  constructor(grid) {
    this.grid = Object.freeze(grid.map(row => Object.freeze([...row])));
  }

  static T_SHAPE = new Tetromino([
    ['.', 'T', '.'],
    ['T', 'T', 'T'],
    ['.', '.', '.'],
  ]);

  toString() {
    return this.grid.map(row => row.join('')).join('\n') + '\n';
}
}
