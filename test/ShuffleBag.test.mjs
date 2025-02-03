
import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";
import { ScoringSystem } from "../src/ScoringSystem.mjs";
import { ShuffleBag } from "../src/ShuffleBag.mjs";


describe("Test shuffle bag", () => {
  
  test("shuffle bag test1", () => {
    let shuffleBag = new ShuffleBag([
      Tetromino.I_SHAPE,
      Tetromino.T_SHAPE,
      Tetromino.L_SHAPE,
      Tetromino.J_SHAPE,
      Tetromino.T_SHAPE,
      Tetromino.S_SHAPE,
      Tetromino.Z_SHAPE,
      Tetromino.O_SHAPE,
    ]);

    expect(shuffleBag.shapes.length).to.equal(8)
    expect(shuffleBag.bag.length).to.equal(8)
  });

  test("shuffle bag test2 (pop)", () => {
    let shuffleBag = new ShuffleBag([
      Tetromino.I_SHAPE,
      Tetromino.T_SHAPE,
      Tetromino.L_SHAPE,
      Tetromino.J_SHAPE,
      Tetromino.T_SHAPE,
      Tetromino.S_SHAPE,
      Tetromino.Z_SHAPE,
      Tetromino.O_SHAPE,
    ]);

    expect(shuffleBag.shapes.length).to.equal(8)
    expect(shuffleBag.bag.length).to.equal(8)

    for (let index = 0; index < 8; index++) {
      let expected =shuffleBag.bag[0].toString();
      expect(shuffleBag.pop().toString()).to.equal(expected);
    }
  });


});

