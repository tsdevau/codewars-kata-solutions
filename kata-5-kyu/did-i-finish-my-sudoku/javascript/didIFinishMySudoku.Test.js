//+ ====================================================================================================================
//+
//+ 5 kyu - Did I Finish my Sudoku?  [ ID: 53db96041f1a7d32dc0004d2 ] (did-i-finish-my-sudoku)
//+ URL: https://www.codewars.com/kata/53db96041f1a7d32dc0004d2
//+ Category: GAMES  |  Tags: MATHEMATICS | PUZZLES | GAMES | GAME SOLVERS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { doneOrNot } = require("./didIFinishMySudoku")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(
      doneOrNot([
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
      ]),
      "Finished!"
    )

    assert.strictEqual(
      doneOrNot([
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 0, 3, 4, 9],
        [1, 0, 0, 3, 4, 2, 5, 6, 0],
        [8, 5, 9, 7, 6, 1, 0, 2, 0],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 0, 1, 5, 3, 7, 2, 1, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 0, 0, 4, 8, 1, 1, 7, 9]
      ]),
      "Try again!"
    )

    assert.strictEqual(
      doneOrNot([
        [1, 3, 2, 5, 7, 9, 4, 6, 8],
        [4, 9, 8, 2, 6, 1, 3, 7, 5],
        [7, 5, 6, 3, 8, 4, 2, 1, 9],
        [6, 4, 3, 1, 5, 8, 7, 9, 2],
        [5, 2, 1, 7, 9, 3, 8, 4, 6],
        [9, 8, 7, 4, 2, 6, 5, 3, 1],
        [2, 1, 4, 9, 3, 5, 6, 8, 7],
        [3, 6, 5, 8, 1, 7, 9, 2, 4],
        [8, 7, 9, 6, 4, 2, 1, 5, 3]
      ]),
      "Finished!"
    )

    assert.strictEqual(
      doneOrNot([
        [1, 3, 2, 5, 7, 9, 4, 6, 8],
        [4, 9, 8, 2, 6, 1, 3, 7, 5],
        [7, 5, 6, 3, 8, 4, 2, 1, 9],
        [6, 4, 3, 1, 5, 8, 7, 9, 2],
        [5, 2, 1, 7, 9, 3, 8, 4, 6],
        [9, 8, 7, 4, 2, 6, 5, 3, 1],
        [2, 1, 4, 9, 3, 5, 6, 8, 7],
        [3, 6, 5, 8, 1, 7, 9, 2, 4],
        [8, 7, 9, 6, 4, 2, 1, 3, 5]
      ]),
      "Try again!"
    )

    assert.strictEqual(
      doneOrNot([
        [1, 3, 2, 5, 7, 9, 4, 6, 8],
        [4, 9, 8, 2, 6, 0, 3, 7, 5],
        [7, 0, 6, 3, 8, 0, 2, 1, 9],
        [6, 4, 3, 1, 5, 0, 7, 9, 2],
        [5, 2, 1, 7, 9, 0, 8, 4, 6],
        [9, 8, 0, 4, 2, 6, 5, 3, 1],
        [2, 1, 4, 9, 3, 5, 6, 8, 7],
        [3, 6, 0, 8, 1, 7, 9, 2, 4],
        [8, 7, 0, 6, 4, 2, 1, 3, 5]
      ]),
      "Try again!"
    )

    assert.strictEqual(
      doneOrNot([
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [2, 3, 4, 5, 6, 7, 8, 9, 1],
        [3, 4, 5, 6, 7, 8, 9, 1, 2],
        [4, 5, 6, 7, 8, 9, 1, 2, 3],
        [5, 6, 7, 8, 9, 1, 2, 3, 4],
        [6, 7, 8, 9, 1, 2, 3, 4, 5],
        [7, 8, 9, 1, 2, 3, 4, 5, 6],
        [8, 9, 1, 2, 3, 4, 5, 6, 7],
        [9, 1, 2, 3, 4, 5, 6, 7, 8]
      ]),
      "Try again!"
    )
  })
})