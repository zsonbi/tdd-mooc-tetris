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

  validate(rowOffset, colOffset, block){
    if(rowOffset<0 || rowOffset>=this.grid.length){
      return false;
    }
    if(colOffset<0 || colOffset>=this.grid.length){
      return false;
    }

    let col = 0;
    for (let i = colOffset; i < colOffset + block.grid.length; i++) {
      let row=0;
      for (let j = rowOffset; j < block.grid.length+rowOffset; j++) {
        if(block.grid[row][col] !== '.'){
          if(j>=this.grid.length || this.grid[j][i] !=='.'){
            return false;
          }
        }
        row++;
      }
      col++;
    }
    return true;
  }

  move(dir){
    if(this.currentBlock===null){
      return;
    }
    this.clean(this.currentBlockHeight,this.currentColOffset,this.currentBlock);

    if(dir==='l'){
      this.currentColOffset--;
    }
    if(dir==='r'){
      this.currentColOffset++;
    }
    if(dir==='d'){
      this.currentBlockHeight++;
    }
    if(!this.validate(this.currentBlockHeight,this.currentColOffset,this.currentBlock)){
      if(dir==='l'){
        this.currentColOffset++;
      }
      if(dir==='r'){
        this.currentColOffset--;
      }
      if(dir==='d'){
        this.currentBlockHeight--;
        this.place(this.currentBlockHeight,this.currentColOffset,this.currentBlock);
        this.currentBlock=null;
        this.currentBlockHeight=0;
        return;
      }
    }
    this.place(this.currentBlockHeight,this.currentColOffset,this.currentBlock);
  }

  tick(){
    if(this.currentBlock===null){
      return;
    }
    let col = 0;
    let row=0;
    this.clean(this.currentBlockHeight,this.currentColOffset,this.currentBlock);
    this.currentBlockHeight++;

    if(!this.validate(this.currentBlockHeight,this.currentColOffset,this.currentBlock)){
      this.place(this.currentBlockHeight-1,this.currentColOffset,this.currentBlock);
      this.currentBlock=null;
      this.currentBlockHeight=0;
      return;
    }

    this.place(this.currentBlockHeight,this.currentColOffset,this.currentBlock);
  }


  toString() {
    return this.grid.map(row => row.join('')).join('\n') + '\n';
  }
}
