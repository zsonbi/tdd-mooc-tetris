
import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

describe("Falling tetrominoes move", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  test("Move left", () => {
    board.drop(Tetromino.T_SHAPE);
    board.move('l');
    expect(board.toString()).to.equalShape(
      `...T......
       ..TTT.....
       ..........
       ..........
       ..........
       ..........`
    );
  });

  test("Move right", () => {
    board.drop(Tetromino.T_SHAPE);
    board.move('r');
    expect(board.toString()).to.equalShape(
      `.....T....
       ....TTT...
       ..........
       ..........
       ..........
       ..........`
    );
  });

  test("Move down", () => {
    board.drop(Tetromino.T_SHAPE);
    board.move('d');
    expect(board.toString()).to.equalShape(
      `..........
       ....T.....
       ...TTT....
       ..........
       ..........
       ..........`
    );
  });
  
});
