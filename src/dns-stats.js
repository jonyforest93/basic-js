const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    const dnsObj = {};

    domains.forEach((element) => {
        const arr = element.split(".").reverse();

        let path = "";

        arr.forEach((element) => {
            path += `.${element}`;
            if (dnsObj[path]) {
                dnsObj[path] += 1;
            } else {
                dnsObj[path] = 1;
            }
        });
    });

    return dnsObj;
}

module.exports = {
    getDNSStats,
};
