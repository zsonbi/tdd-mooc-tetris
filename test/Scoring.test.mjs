
import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";
import { ScoringSystem } from "../src/ScoringSystem.mjs";


describe("Test scoring system", () => {
  

  test("start from the top middle", () => {
    let scoringSystem = new ScoringSystem();
    let board=Board.fromString(
      `..........
       ..........
       ..........
       OOOOOOOOOO
       TTTTTTTTTT
       IIIIIIIIII`
      );
      board.addObserver(scoringSystem)
      board.drop(Tetromino.T_SHAPE);
      board.tick();
      
      expect(scoringSystem.score).to.equal(300);

  });


});

