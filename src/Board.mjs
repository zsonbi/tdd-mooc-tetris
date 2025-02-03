import { Tetromino } from "../src/Tetromino.mjs";
import { RotatingShape } from "./RotatingShape.mjs";

export class Board {
  width;
  height;
  grid;
  currentBlock;
  currentBlockHeight;
  currentColOffset;
  constructor(width, height,grid) {
    this.width = width;
    this.height = height;
    if(grid===undefined || grid===null){
    this.grid = Array.from({ length: this.height }, () => Array(this.width).fill('.'));
    }
    else{
      this.grid=grid;
    }
    this.score=0;
  }
  
  static fromString(boardString) {
    const rows = boardString.trim().split("\n");
    return new Board(rows[0]?.length || 0,rows.length,boardString.trim().split('\n').map(row => row.trim().split('')));
  }

  clearLines(){
    let fullLineCount=0;
    for (let i = this.height-1; i >= 0; i++) {
      if(this.checkLineFull(i)){
        fullLineCount++;
      }
      else{
        this.shrinkBoard(i-fullLineCount,i);
        i-=fullLineCount;
        fullLineCount=0;
      }
    }
  }

  checkLineFull(height){
    for (let i = 0; i < this.width; i++) {
      if(this.grid[height][i] === '.'){
        return false;
      }
    }
    return true;
  }
  //[upper index, lower index] for example to shrink 4. and 5. rows shrinkBoard(3,4)
  shrinkBoard(startHeight, endHeight){
    this.clean(this.currentBlockHeight,this.currentColOffset,this.currentBlock);
    let difference = (endHeight+1)-startHeight;
    for (let i = endHeight; i >= 0; i--) {
      for (let col = 0; col < this.width; col++) {
        if(i-difference>=0){
        this.grid[i][col]=this.grid[i-difference][col];
        }
        else{
          this.grid[i][col]='.';
        }
      }
    }
    this.place(this.currentBlockHeight,this.currentColOffset,this.currentBlock);

  }

  drop(block) {
    if(this.hasFalling()){
      throw("already falling");
    }
    if (typeof block === 'string'){
     block=RotatingShape.fromString(block);
    }
    this.currentBlock=block;
    this.currentBlockHeight=0;
    if(this.currentBlock.type===1 && this.currentBlock.rotateState==0){
      this.currentBlockHeight--;
    }
    this.currentColOffset=Math.floor(this.width / 2 - block.grid.length / 2)
    this.place(this.currentBlockHeight,this.currentColOffset,block);
  }

  hasFalling(){
    return this.currentBlock!==undefined && this.currentBlock!==null;
  }

  place(rowOffset, colOffset, block){
    if(!this.hasFalling()){
      return
    }
    let col = 0;
    let row = 0;
    for (let i = colOffset; i < colOffset + block.grid.length; i++) {
      row = 0;
      for (let j = rowOffset; j < rowOffset+block.grid.length; j++) {
        if(j>=this.grid.length || j<0){
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
    if(!this.hasFalling()){
      return
    }
    let col = 0;
    let row=0;
    for (let i = colOffset; i < colOffset + block.grid.length; i++) {
      row=0;
      for (let j = rowOffset; j < block.grid.length+rowOffset; j++) {
        if(j>=this.grid.length || j<0){
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

  rotateLeft(){
    if(!this.hasFalling()){
      return;
    }
    this.clean(this.currentBlockHeight,this.currentColOffset,this.currentBlock);
    let success=false;
    if(this.validate(this.currentBlockHeight,this.currentColOffset, this.currentBlock.rotateLeft())){
      this.currentBlock=this.currentBlock.rotateLeft();
      success=true;    
    }
    success = success || this.currentBlock.type===1;
    if(!success && this.validate(this.currentBlockHeight,this.currentColOffset-1, this.currentBlock.rotateLeft())){
      this.currentBlock=this.currentBlock.rotateLeft();
      this.currentColOffset--;
      success=true;    
    }
    if(!success && this.validate(this.currentBlockHeight,this.currentColOffset+1, this.currentBlock.rotateLeft())){
      this.currentBlock=this.currentBlock.rotateLeft();
      this.currentColOffset++;
      success=true;    
    }

    this.place(this.currentBlockHeight,this.currentColOffset,this.currentBlock);
  }
  rotateRight(){
    if(!this.hasFalling()){
      return;
    }
    this.clean(this.currentBlockHeight,this.currentColOffset,this.currentBlock);
    let success=false;
    if(this.validate(this.currentBlockHeight,this.currentColOffset, this.currentBlock.rotateRight())){
      this.currentBlock=this.currentBlock.rotateRight();
      success=true;    
    }
    success = success || this.currentBlock.type===1;
    if(!success && this.validate(this.currentBlockHeight,this.currentColOffset-1, this.currentBlock.rotateRight())){
      this.currentBlock=this.currentBlock.rotateRight();
      this.currentColOffset--;
      success=true;    
    }
    if(!success && this.validate(this.currentBlockHeight,this.currentColOffset+1, this.currentBlock.rotateRight())){
      this.currentBlock=this.currentBlock.rotateRight();
      this.currentColOffset++;
      success=true;    
    }
    this.place(this.currentBlockHeight,this.currentColOffset,this.currentBlock);
  }
  validate(rowOffset, colOffset, block){
    if( rowOffset>=this.height){
      return false;
    }
    if( colOffset>=this.width){
      return false;
    }
    let col = 0;
    for (let i = colOffset; i < colOffset + block.grid.length; i++) {
      let row=0;
      for (let j = rowOffset; j < block.grid.length+rowOffset; j++) {
        if(block.grid[row][col] !== '.'){
          if(j>=this.height || j<0 || i<0 || i>=this.width || this.grid[j][i] !=='.'){
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
    if(!this.hasFalling()){
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
    if(!this.hasFalling()){
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
