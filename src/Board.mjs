export class Board {
  width;
  height;
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }



  toString() {
    let res="";
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        res+='.';
      }
      res+="\n";
    }
    return res;
  }
}
