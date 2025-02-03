
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
    expect(shuffleBag.bagIndex).to.equal(0)
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
    expect(shuffleBag.bagIndex).to.equal(0)

    expect(shuffleBag.pop().toString()).to.equal(shuffleBag.bag[0].toString());
    for (let index = 1; index < 7; index++) {
      expect(shuffleBag.pop().toString()).to.equal(shuffleBag.bag[index].toString());
      expect(shuffleBag.bagIndex).to.equal((index+1)%8);
    }
    console.log(shuffleBag.bagIndex);

  });


});

