import { Tetromino } from "../src/Tetromino.mjs";

export class Board {
  width;
  height;
  grid;
  currentBlock;
  currentBlockHeight;
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = Array.from({ length: this.height }, () => Array(this.width).fill('.'));
  }

  drop(block) {
    this.currentBlock=block;
    let col = 0;
    for (let i = Math.floor(this.width / 2 - block.grid.length / 2); i < Math.floor(this.width / 2 + block.grid.length / 2); i++) {
      for (let j = 0; j < block.grid.length; j++) {
        this.grid[j][i] = block.grid[j][col];
      }
      col += 1;
    }
  }

  tick(){


  }


  toString() {
    return this.grid.map(row => row.join('')).join('\n') + '\n';
  }
}
