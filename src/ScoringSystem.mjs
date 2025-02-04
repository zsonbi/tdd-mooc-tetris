export class ScoringSystem {
  constructor(level) {
    this.score = 0;
    this.scores = [0, 40, 100, 300, 1200];
    if(level ===undefined){
      this.level=0;
    }
    else{
      this.level = level
    }
  }

  onCleared(numRows) {
    this.score += this.scores[numRows]*(this.level+1);
    // console.log("New score "+this.score);
  }

  getScore() {
    return this.score;
  }
}
