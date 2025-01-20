import { Tetromino } from "../src/Tetromino.mjs";

export class Board {
  width;
  height;
  grid;
  currentBlock;
  currentBlockHeight;
  currentColOffset;
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = Array.from({ length: this.height }, () => Array(this.width).fill('.'));
  }

  drop(block) {
    this.currentBlock=block;
    this.currentBlockHeight=0;
    this.currentColOffset=Math.floor(this.width / 2 - block.grid.length / 2)
    this.place(0,this.currentColOffset,block);
  }

  place(rowOffset, colOffset, block){
    let col = 0;
    let row = 0;
    for (let i = colOffset; i < colOffset + block.grid.length; i++) {
      row = 0;
      for (let j = rowOffset; j < rowOffset+block.grid.length; j++) {
        this.grid[j][i] = block.grid[row][col];row++;
      }
      col++;
    }
  }

  clean(rowOffset, colOffset, block){
    let col = 0;
    let row=0;
    for (let i = colOffset; i < colOffset + block.grid.length; i++) {
      row=0;

      col += 1;
    }
  }

  tick(){
    if(this.currentBlock===null){
      return;
    }
    let col = 0;
    let row=0;
    for (let i = this.currentColOffset; i < this.currentColOffset + this.currentBlock.grid.length; i++) {
      row=0;
      for (let j = this.currentBlockHeight; j < this.currentBlock.grid.length+this.currentBlockHeight; j++) {
        if(this.currentBlock.grid[row][col] !== '.'){
            this.grid[j][i]='.';
        }
        row++;
      }
      col += 1;
    }
    this.currentBlockHeight+=1;
    console.log("passed"+this.currentBlockHeight)

    col = 0;
    for (let i = this.currentColOffset; i < Math.floor(this.currentColOffset + this.currentBlock.grid.length); i++) {
      row=0;
      for (let j = this.currentBlockHeight; j < this.currentBlock.grid.length+this.currentBlockHeight; j++) {
        if(this.currentBlock.grid[row][col] !== '.'){
          if(this.grid[j][i] !=='.'){
            this.currentBlock=null;
            this.currentBlockHeight=0;
            return;
          }
        }
        row++;
      }
      col += 1;
    }
    col = 0;
    for (let i = Math.floor(this.width / 2 - this.currentBlock.grid.length / 2); i < Math.floor(this.width / 2 + this.currentBlock.grid.length / 2); i++) {
      for (let j = this.currentBlockHeight-1; j < this.currentBlock.grid.length+this.currentBlockHeight-1; j++) {
        if(this.currentBlock.grid[j][col] !== '.'){
            this.grid[j][i]='.';
        }
      }
      col += 1;
    }
    col = 0;
    for (let i = Math.floor(this.width / 2 - this.currentBlock.grid.length / 2); i < Math.floor(this.width / 2 + this.currentBlock.grid.length / 2); i++) {
      for (let j = this.currentBlockHeight-1; j < this.currentBlock.grid.length+this.currentBlockHeight-1; j++) {
        if(this.currentBlock.grid[j][col] !== '.'){
          this.grid[j][i] = block.grid[j][col];
        }
      }
      col += 1;
    }

  }


  toString() {
    return this.grid.map(row => row.join('')).join('\n') + '\n';
  }
}
