import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";
import { ScoringSystem } from "../src/ScoringSystem.mjs";

describe("Test scoring system", () => {
  test("0 line clear", () => {
    let scoringSystem = new ScoringSystem();
    let board = Board.fromString(
      `..........
       ..........
       ..........
       ..........
       ..........
       ..........`
    );
    board.addObserver(scoringSystem);
    board.drop(Tetromino.T_SHAPE);
    board.tick();
    expect(scoringSystem.score).to.equal(0);
  });

  test("1 line clear", () => {
    let scoringSystem = new ScoringSystem();
    let board = Board.fromString(
      `..........
       ..........
       ..........
       OOOOOOOOOO
       ..........
       ..........`
    );
    board.addObserver(scoringSystem);
    board.drop(Tetromino.T_SHAPE);
    board.tick();
    expect(scoringSystem.score).to.equal(40);
  });

  test("2 line clear", () => {
    let scoringSystem = new ScoringSystem();
    let board = Board.fromString(
      `..........
       ..........
       ..........
       ..........
       TTTTTTTTTT
       IIIIIIIIII`
    );
    board.addObserver(scoringSystem);
    board.drop(Tetromino.T_SHAPE);
    board.tick();
    expect(scoringSystem.score).to.equal(100);
  });

  test("3 line clear", () => {
    let scoringSystem = new ScoringSystem();
    let board = Board.fromString(
      `..........
       ..........
       ..........
       OOOOOOOOOO
       TTTTTTTTTT
       IIIIIIIIII`
    );
    board.addObserver(scoringSystem);
    board.drop(Tetromino.T_SHAPE);
    board.tick();
    expect(scoringSystem.score).to.equal(300);
  });

  test("4 line clear", () => {
    let scoringSystem = new ScoringSystem();
    let board = Board.fromString(
      `..........
       ..........
       OOOOOOOOOO
       OOOOOOOOOO
       TTTTTTTTTT
       IIIIIIIIII`
    );
    board.addObserver(scoringSystem);
    board.drop(Tetromino.T_SHAPE);
    board.tick();
    expect(scoringSystem.score).to.equal(1200);
  });

  test("3-2 line clear", () => {
    let scoringSystem = new ScoringSystem();
    let board = Board.fromString(
      `OOOOOOOOOO
       TTTTTTTTTT
       ..........
       OOOOOOOOOO
       TTTTTTTTTT
       IIIIIIIIII`
    );
    board.addObserver(scoringSystem);
    board.clearLines();
    expect(scoringSystem.score).to.equal(400);
  });
});
