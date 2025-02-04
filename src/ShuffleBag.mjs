export class ShuffleBag {
  constructor(shapes) {
    this.shapes = shapes;
    this.bag = [];
    this.shuffle();
  }

  pop() {
    if (this.shapes.length == 0) {
      return null;
    }
    if (this.bag.length == 0) {
      this.shuffle();
    }

    return this.bag.shift();
  }
  next(){
    return this.pop();
  }
  shuffle() {
    var tempBag = [...this.shapes];
    for (let i = 0; i < this.shapes.length; i++) {
      let index = Math.floor(Math.random() * tempBag.length);
      this.bag.push(tempBag[index]);
      tempBag.splice(index, 1);
    }
  }
}
