const { NotImplementedError } = require("../extensions/index.js");

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
  const resultMatrix = matrix.map(row => [...row]);
  for (let i = 0; i < matrix.length; i += 1) {
      for (let j = 0; j < matrix[i].length; j += 1) {
          let counterMines = 0;
          const coord = [
              [i - 1, j - 1],
              [i - 1, j],
              [i - 1, j + 1],
              [i, j - 1],
              [i, j + 1],
              [i + 1, j - 1],
              [i + 1, j],
              [i + 1, j + 1],
          ];

          for (let k = 0; k < coord.length; k += 1) {
              const x = coord[k][0];
              const y = coord[k][1];

              if (x >= 0 && x < matrix.length && y >= 0 && y < matrix[i].length) {
                  if (matrix[x][y] === true) {
                      counterMines += 1;
                  }
              }
          }
      
          resultMatrix[i][j] = counterMines;
      }
  }
  return resultMatrix;
}

module.exports = {
    minesweeper,
};
