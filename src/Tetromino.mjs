export class Tetromino {
  constructor(grid, type,rotateState) {
    this.grid = Object.freeze(grid.map(row => Object.freeze([...row])));
    this.type=type
    this.rotateState=rotateState
  }

  static L_SHAPE_RIGHT = new Tetromino([
    ['L', 'L', 'L'],
    ['.', '.', 'L'],
    ['.', '.', '.'],
  ],4,0);

  static L_SHAPE_RIGHT2 = new Tetromino([
    ['.', '.', ''],
    ['L', 'L', 'L'],
    ['.', '.', 'L'],
  ],4,1);
  static L_SHAPE_RIGHT3 = new Tetromino([
    ['L', '.', '.'],
    ['L', 'L', 'L'],
    ['.', '.', '.'],
  ],4,2);   
  static L_SHAPE_RIGHT4 = new Tetromino([
    ['.', '.', '.'],
    ['L', 'L', 'L'],
    ['.', '', 'L'],
  ],4,3);  
  static L_SHAPE_LEFT = new Tetromino([
    ['.', '.', '.'],
    ['L', 'L', 'L'],
    ['L', '.', '.'],
  ],3,0);

  static L_SHAPE_LEFT2 = new Tetromino([
    ['L', 'L', '.'],
    ['.', 'L', '.'],
    ['.', 'L', '.'],
  ],3,1);

  static L_SHAPE_LEFT3 = new Tetromino([
    ['.', '.', 'L'],
    ['L', 'L', 'L'],
    ['.', '.', '.'],
  ],3,2);

  static L_SHAPE_LEFT4 = new Tetromino([
    ['.', 'L', '.'],
    ['.', 'L', '.'],
    ['.', 'L', 'L'],
  ],3,3);

  static T_SHAPE = new Tetromino([
    ['.', 'T', '.'],
    ['T', 'T', 'T'],
    ['.', '.', '.'],
  ],0,0);

  static T_SHAPE2 = new Tetromino([
    ['.', 'T', '.'],
    ['.', 'T', 'T'],
    ['.', 'T', '.'],
  ],0,1);

  static T_SHAPE3 = new Tetromino([
    ['.', '.', '.'],
    ['T', 'T', 'T'],
    ['.', 'T', '.'],
  ],0,2);

  static T_SHAPE4 = new Tetromino([
    ['.', 'T', '.'],
    ['T', 'T', '.'],
    ['.', 'T', '.'],
  ],0,3);

  static I_SHAPE = new Tetromino([
    ['.','.','.','.','.'],
    ['.','.','.','.','.'],
    ['I','I','I','I','.'],
    ['.','.','.','.','.'],
    ['.','.','.','.','.'],
  ],1,0);

  static I_SHAPE2 = new Tetromino([
    ['.','.','I','.','.'],
    ['.','.','I','.','.'],
    ['.','.','I','.','.'],
    ['.','.','I','.','.'],
    ['.','.','.','.','.'],
  ],1,1);
  static O_SHAPE = new Tetromino([
    ['.','O','O'],
    ['.','O','O'],
    ['.','.','.'],
  ],2,0);
  rotateRight() {
    if(this.type === 2){
      return new Tetromino(this.grid,this.type);
    }
    else if(this.type===1){
      if(this.grid[2][0]=='I'){
        return Tetromino.I_SHAPE2;
      }
      else{
        return Tetromino.I_SHAPE;
      }
    }
    else if(this.type===0){
      switch(this.rotateState){
        case 0:
          return Tetromino.T_SHAPE2;
        case 1:
          return Tetromino.T_SHAPE3;
        case 2:
          return Tetromino.T_SHAPE4;
        case 3:
          return Tetromino.T_SHAPE;
      }
    }
    else if(this.type===3){
      switch(this.rotateState){
        case 0:
          return Tetromino.L_SHAPE_LEFT2;
        case 1:
          return Tetromino.L_SHAPE_LEFT3;
        case 2:
          return Tetromino.L_SHAPE_LEFT4;
        case 3:
          return Tetromino.L_SHAPE_LEFT;
      }
    }
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
  if(this.type === 2){
    return new Tetromino(this.grid,this.type);
  }
  else if(this.type===1){
    if(this.grid[2][0]=='I'){
      return Tetromino.I_SHAPE2;
    }
    else{
      return Tetromino.I_SHAPE;
    }
  }
  else if(this.type===0){
    switch(this.rotateState){
      case 0:
        return Tetromino.T_SHAPE4;
      case 1:
        return Tetromino.T_SHAPE;
      case 2:
        return Tetromino.T_SHAPE2;
      case 3:
        return Tetromino.T_SHAPE3;
    }
  }
  else if(this.type===3){
    switch(this.rotateState){
      case 0:
        return Tetromino.L_SHAPE_LEFT4;
      case 1:
        return Tetromino.L_SHAPE_LEFT;
      case 2:
        return Tetromino.L_SHAPE_LEFT2;
      case 3:
        return Tetromino.L_SHAPE_LEFT3;
    }
  }
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
