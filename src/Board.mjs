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
    let res="";
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        res+=this.grid[i][j];
      }
      res+="\n";
    }
    return res;
  }
}
