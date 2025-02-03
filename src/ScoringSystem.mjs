export class ScoringSystem {
    constructor() {
        this.score = 0;
        this.scores=[0, 40, 100, 300, 1200];
    }

        onCleared(numRows) {
            this.score += this.scores[numRows];
            console.log("New score "+this.score);
        }

    getScore() {
        return this.score;
    }
}