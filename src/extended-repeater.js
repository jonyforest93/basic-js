const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let result = "";
    const resultSubst = [];
    const additionStr = [];

    str = String(str);

    options.repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
    options.separator = options.separator ? options.separator : "+";
    options.addition =
        String(options.addition) && String(options.addition) != "undefined"
            ? String(options.addition)
            : null;
    options.additionRepeatTimes = options.additionRepeatTimes
        ? options.additionRepeatTimes
        : 1;
    options.additionSeparator = options.additionSeparator
        ? options.additionSeparator
        : "|";

    if (options.addition && options.additionRepeatTimes) {
        for (let i = 0; i < options.additionRepeatTimes; i += 1) {
            additionStr.push(options.addition);
        }
    }

    let additionRes = additionStr.join(options.additionSeparator);

    for (let i = 0; i < options.repeatTimes; i += 1) {
        resultSubst.push(`${str}${additionRes}`);
    }

    result = resultSubst.join(options.separator);

    return result;
}

module.exports = {
    repeater,
};
