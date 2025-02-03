import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("Import custom board sate", () => {
  test("start from the top middle", () => {
    let board = Board.fromString(
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

describe("shrink test on top", () => {
  test("shrink test", () => {
    let board = Board.fromString(
      `....T.....
        ...TTT....
        ..........
        OOOOOOOOOO
        TTTTTTTTTT
        IIIIIIIIII`
    );

    board.shrinkBoard(4, 4);

    expect(board.toString()).to.equalShape(
      `..........
         ....T.....
         ...TTT....
         ..........
         OOOOOOOOOO
         IIIIIIIIII`
    );
  });

  test("shrink test multiple lines", () => {
    let board = Board.fromString(
      `....T.....
        ...TTT....
        ..........
        OOOOOOOOOO
        TTTTTTTTTT
        IIIIIIIIII`
    );

    board.shrinkBoard(3, 4);

    expect(board.toString()).to.equalShape(
      `..........
         ..........
         ....T.....
         ...TTT....
         ..........
         IIIIIIIIII`
    );
  });

  test("shrink test multiple lines2", () => {
    let board = Board.fromString(
      `....T.....
        ...TTT....
        ..........
        OOOOOOOOOO
        TTTTTTTTTT
        IIIIIIIIII`
    );

    board.shrinkBoard(3, 5);

    expect(board.toString()).to.equalShape(
      `..........
         ..........
         ..........
         ....T.....
         ...TTT....
         ..........`
    );
  });

  test("shrink test on top", () => {
    let board = Board.fromString(
      `....T.....
       ...TTT....
       ..........
       OOOOOOOOOO
       TTTTTTTTTT
       IIIIIIIIII`
    );

    board.shrinkBoard(0, 1);

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       OOOOOOOOOO
       TTTTTTTTTT
       IIIIIIIIII`
    );
  });

  test("shrink test on top2", () => {
    let board = Board.fromString(
      `..........
        ..........
        ..........
        OOOOOOOOOO
        TTTTTTTTTT
        IIIIIIIIII`
    );

    board.drop(Tetromino.T_SHAPE);

    expect(board.toString()).to.equalShape(
      `....T.....
             ...TTT....
             ..........
             OOOOOOOOOO
             TTTTTTTTTT
             IIIIIIIIII`
    );

    board.shrinkBoard(0, 1);

    expect(board.toString()).to.equalShape(
      `....T.....
        ...TTT....
        ..........
        OOOOOOOOOO
        TTTTTTTTTT
        IIIIIIIIII`
    );

    board.shrinkBoard(4, 5);

    expect(board.toString()).to.equalShape(
      `....T.....
        ...TTT....
        ..........
        ..........
        ..........
        OOOOOOOOOO`
    );
  });
});

describe("clear lines test", () => {
  test("start from the top middle", () => {
    let board = Board.fromString(
      `....T.....
        ...TTT....
        ..........
        OOO...OOOO
        TTTT.TTTTT
        IIIIIIIIII`
    );

    board.drop(Tetromino.T_SHAPE);

    expect(board.toString()).to.equalShape(
      `....T.....
            ...TTT....
            ..........
            OOO...OOOO
            TTTT.TTTTT
            IIIIIIIIII`
    );

    board.shrinkBoard(0, 1);

    expect(board.toString()).to.equalShape(
      `....T.....
       ...TTT....
       ..........
       OOO...OOOO
       TTTT.TTTTT
       IIIIIIIIII`
    );

    board.tick();

    expect(board.toString()).to.equalShape(
      `..........
       ....T.....
       ...TTT....
       ..........
       OOO...OOOO
       TTTT.TTTTT`
    );
    for (let i = 0; i < 10; i++) {
      // console.log(board.hasFalling());
      board.tick();
      // console.log(board.toString());
    }

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       ....T.....
       TTTT.TTTTT`
    );
  });

  test("top clear", () => {
    let board = Board.fromString(
      `OOOOOOOOOO
         TTTTTTTTTT
         ..........
         ..........
         ..........
         ..........`
    );

    board.clearLines();

    expect(board.toString()).to.equalShape(
      `..........
           ..........
           ..........
           ..........
           ..........
           ..........`
    );
  });
});
