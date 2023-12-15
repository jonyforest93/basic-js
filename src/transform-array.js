const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error(`'arr' parameter must be an instance of the Array!`);
    }

    const cloneArray = [...arr];
    const result = [];

    for (let i = 0; i < cloneArray.length; i += 1) {
        switch (cloneArray[i]) {
            case "--discard-next":
                cloneArray.splice(i + 1, 1);
                i++;
                break;
            case "--discard-prev":
                if (i > 0) {
                    result.pop();
                }
                break;
            case "--double-next":
                if (i < cloneArray.length - 1) {
                    result.push(cloneArray[i + 1]);
                }
                break;
            case "--double-prev":
                if (i > 0) {
                    result.push(cloneArray[i - 1]);
                }
                break;
            default:
                result.push(cloneArray[i]);
        }
    }

    return result;
}

module.exports = {
    transform,
};
