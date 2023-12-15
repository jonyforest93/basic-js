const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    let sum = 0;
    const indexWidthZero = [];

    for (let i = 0; i < matrix.length; i += 1) {
        for (let j = 0; j < matrix[i].length; j += 1) {
            indexWidthZero.forEach((el) => {
                if (j == el) {
                    sum = sum - matrix[i][j];
                }
            });
            if (matrix[i][j] === 0 && !indexWidthZero.includes(j)) {
                indexWidthZero.push(j);
            } else {
                sum = sum + matrix[i][j];
            }
        }
    }
    return sum;
}

module.exports = {
    getMatrixElementsSum,
};
