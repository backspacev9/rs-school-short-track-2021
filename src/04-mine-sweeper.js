/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const field = matrix;
  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[0].length; i++) {
      if (matrix[j][i] === false) {
        field[j][i] = 0;
      }
    }
  }
  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[0].length; i++) {
      if (matrix[j][i] !== true) {
        for (let a = j - 1; a <= j + 1; a++) {
          for (let b = i - 1; b <= i + 1; b++) {
            if (a >= 0 && b >= 0 && a < matrix.length) {
              if (matrix[a][b] === true) {
                field[j][i] += 1;
              }
            }
          }
        }
      }
    }
  }
  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[0].length; i++) {
      if (matrix[j][i] === true) {
        field[j][i] = 1;
      }
    }
  }
  return field;
}
module.exports = minesweeper;
