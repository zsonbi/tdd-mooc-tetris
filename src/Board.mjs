export class Board {
  width;
  height;
  grid;
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid=Array.from({ length: this.height }, () => Array(this.width).fill('.'));
  }



  toString() {
    return this.grid.map(row => row.join('')).join('\n')+'\n';
  }
}
