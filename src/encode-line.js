const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let result = "";

    const lineArray = str.split("");
    let count = 1;

    lineArray.forEach((element, index) => {
        if (element === lineArray[index + 1]) {
            count += 1;
        } else if (count > 1) {
            result += `${count}${element}`;
            count = 1;
        } else {
            result += `${element}`;
        }
    });

    return result;
}

module.exports = {
    encodeLine,
};
