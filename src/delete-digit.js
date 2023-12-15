const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const arr = String(n).split("");
    let length = arr.length;
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] > arr[i - 1]) {
            arr.splice(i - 1, 1);
            break;
        }
    }
    if (arr.length === length) {
        arr.pop();
    }
    return Number(arr.join(""));
}

module.exports = {
    deleteDigit,
};
