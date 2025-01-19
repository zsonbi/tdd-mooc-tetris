import { Tetromino } from "../src/Tetromino.mjs";

export class Board {
  width;
  height;
  grid;
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid=Array.from({ length: this.height }, () => Array(this.width).fill('.'));
  }

  drop(block){
    let col=0
    for (let i = this.width/2-block.grid.length/2; i < this.width; i++) {
      col+=1;
      for (let j = 0; j < block.grid.length; j++) {
        this.grid[j][i]=block.grid[j][col];}
    }
  }

  toString() {
    return this.grid.map(row => row.join('')).join('\n')+'\n';
  }
}
