
import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";


describe("Import custom board sate", () => {
  

  test("start from the top middle", () => {
   let board=Board.fromString(
      `....T.....
       ...TTT....
       ..........
       ..........
       ..........
       ..........`
      );

    expect(board.toString()).to.equalShape(
      `....T.....
       ...TTT....
       ..........
       ..........
       ..........
       ..........`
    );
  });


});

describe("shrink test", () => {
  

  test("start from the top middle", () => {
   let board=Board.fromString(
      `....T.....
       ...TTT....
       ..........
       OOOOOOOOOO
       TTTTTTTTTT
       IIIIIIIIII`
      );

      board.shrinkBoard(4,4);

      console.log(board.toString());
    expect(board.toString()).to.equalShape(
       `..........
        ....T.....
        ...TTT....
        ..........
        OOOOOOOOOO
        IIIIIIIIII`
    );
  });


});

