
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


describe("shrink test multiple lines", () => {
  

  test("start from the top middle", () => {
   let board=Board.fromString(
      `....T.....
       ...TTT....
       ..........
       OOOOOOOOOO
       TTTTTTTTTT
       IIIIIIIIII`
      );

      board.shrinkBoard(3,4);

    expect(board.toString()).to.equalShape(
       `..........
        ..........
        ....T.....
        ...TTT....
        ..........
        IIIIIIIIII`
    );
  });
});

describe("shrink test multiple lines2", () => {
  

  test("start from the top middle", () => {
   let board=Board.fromString(
      `....T.....
       ...TTT....
       ..........
       OOOOOOOOOO
       TTTTTTTTTT
       IIIIIIIIII`
      );

      board.shrinkBoard(3,5);

    expect(board.toString()).to.equalShape(
       `..........
        ..........
        ..........
        ....T.....
        ...TTT....
        ..........`
    );
  });
});

describe("shrink test on top", () => {
  

  test("start from the top middle", () => {
   let board=Board.fromString(
      `....T.....
       ...TTT....
       ..........
       OOOOOOOOOO
       TTTTTTTTTT
       IIIIIIIIII`
      );

      board.shrinkBoard(0,1);

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       OOOOOOOOOO
       TTTTTTTTTT
       IIIIIIIIII`
    );
  });
});