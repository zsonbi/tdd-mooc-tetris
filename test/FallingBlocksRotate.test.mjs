
import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";
import { RotatingShape } from "../src/RotatingShape.mjs";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

describe("Falling tetrominoes rotate", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  test("Rotate left", () => {
    board.drop(Tetromino.T_SHAPE);
    board.rotateLeft();
    expect(board.toString()).to.equalShape(
      `....T.....
       ...TT.....
       ....T.....
       ..........
       ..........
       ..........`
    );
    board.rotateLeft();
    expect(board.toString()).to.equalShape(
      `..........
       ...TTT....
       ....T.....
       ..........
       ..........
       ..........`
    );
  });



  test("Rotate Right", () => {
    board.drop(Tetromino.T_SHAPE);
    board.rotateRight();
    expect(board.toString()).to.equalShape(
      `....T.....
       ....TT....
       ....T.....
       ..........
       ..........
       ..........`
    );
    board.rotateRight();
    expect(board.toString()).to.equalShape(
      `..........
       ...TTT....
       ....T.....
       ..........
       ..........
       ..........`
    );
  });

  test("Wall kick Right", () => {
    board.drop(Tetromino.T_SHAPE);
    board.rotateRight();
    expect(board.toString()).to.equalShape(
      `....T.....
       ....TT....
       ....T.....
       ..........
       ..........
       ..........`
    );
    board.move('r');
    board.move('r');
    board.move('r');
    board.move('r');
    board.move('r');
    board.move('r');
    board.rotateRight();
    expect(board.toString()).to.equalShape(
      `..........
       .......TTT
       ........T.
       ..........
       ..........
       ..........`
    );
  });


  test("Wall kick left", () => {
    board.drop(Tetromino.T_SHAPE);
    board.rotateRight();
    expect(board.toString()).to.equalShape(
      `....T.....
       ....TT....
       ....T.....
       ..........
       ..........
       ..........`
    );
    board.move('l');
    board.move('l');
    board.move('l');
    board.move('l');
    board.move('l');
    board.move('l');
    board.rotateLeft();
    expect(board.toString()).to.equalShape(
      `.T........
       TTT.......
       ..........
       ..........
       ..........
       ..........`
    );
  });

  test("Rotate Right I Shape", () => {
    board.drop(Tetromino.I_SHAPE);
    board.rotateRight();
    expect(board.toString()).to.equalShape(
      `....I.....
       ....I.....
       ....I.....
       ....I.....
       ..........
       ..........`
    );
    board.rotateRight();
    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..IIII....
       ..........
       ..........
       ..........`
    );
  });

 

  test("Rotate Shape at right wall", () => {
    const shape = RotatingShape.fromString(
        `..A..
         ..B..
         ..C..
         ..D..
         ..E..`
      );
    
    board.drop(shape);

    board.move('r');
    board.move('r');
    board.move('r');
    board.move('r');
    board.move('r');
    expect(board.toString()).to.equalShape(
      `.........A
       .........B
       .........C
       .........D
       .........E
       ..........`
    );
    board.rotateLeft();

    expect(board.toString()).to.equalShape(
      `.........A
       .........B
       .........C
       .........D
       .........E
       ..........`
    );
    board.rotateRight();

    expect(board.toString()).to.equalShape(
      `.........A
       .........B
       .........C
       .........D
       .........E
       ..........`
    );
    board.rotateLeft();
    board.rotateLeft();

    expect(board.toString()).to.equalShape(
      `.........A
       .........B
       .........C
       .........D
       .........E
       ..........`
    );
  });

  test("Rotate I Shape at wall left side", () => {
    board.drop(Tetromino.I_SHAPE2);
    console.log("left move");
    board.move('l');
    board.move('l');
    board.move('l');
    board.move('l');
    board.move('l');
    board.move('l');
    board.move('l');
    expect(board.toString()).to.equalShape(
     `I.........
      I.........
      I.........
      I.........
      ..........
      ..........`
    );
    board.rotateLeft();

    expect(board.toString()).to.equalShape(
     `I.........
      I.........
      I.........
      I.........
      ..........
      ..........`
    );
    board.rotateRight();

    expect(board.toString()).to.equalShape(
     `I.........
      I.........
      I.........
      I.........
      ..........
      ..........`
    );
    board.rotateLeft();
    board.rotateLeft();

    expect(board.toString()).to.equalShape(
     `I.........
      I.........
      I.........
      I.........
      ..........
      ..........`
    );
  });

});

