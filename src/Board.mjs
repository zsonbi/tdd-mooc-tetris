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
        if(j>=this.grid.length){
          continue;
        }
        if(block.grid[row][col]!=='.'){
        this.grid[j][i] = block.grid[row][col];
        }
        row++;
      }
      col++;
    }
  }

  clean(rowOffset, colOffset, block){
    let col = 0;
    let row=0;
    for (let i = colOffset; i < colOffset + block.grid.length; i++) {
      row=0;
      for (let j = rowOffset; j < block.grid.length+rowOffset; j++) {
        if(j>=this.grid.length){
          continue;
        }
        if(this.currentBlock.grid[row][col] !== '.'){
            this.grid[j][i]='.';
        }
        row++;
      }
      col += 1;
    }
  }

  tick(){
    if(this.currentBlock===null){
      return;
    }
    let col = 0;
    let row=0;
    this.clean(this.currentBlockHeight,this.currentColOffset,this.currentBlock);
    this.currentBlockHeight++;

    col = 0;
    for (let i = this.currentColOffset; i < this.currentColOffset + this.currentBlock.grid.length; i++) {
      row=0;
      for (let j = this.currentBlockHeight; j < this.currentBlock.grid.length+this.currentBlockHeight; j++) {
        
        if(this.currentBlock.grid[row][col] !== '.'){
          if(j>=this.grid.length || this.grid[j][i] !=='.'){
            this.place(this.currentBlockHeight-1,this.currentColOffset,this.currentBlock);
            this.currentBlock=null;
            this.currentBlockHeight=0;
            return;
          }
        }
        row++;
      }
      col++;
    }
    this.place(this.currentBlockHeight,this.currentColOffset,this.currentBlock);
  }


  toString() {
    return this.grid.map(row => row.join('')).join('\n') + '\n';
  }
}
