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
  const doms = {};
  for (let i = 0; i < domains.length; i++) {
    const subStr = domains[i].split('.');
    const arrStr = [];
    let tempStr = '';
    for (let j = subStr.length - 1; j >= 0; j--) {
      tempStr += `.${subStr[j]}`;
      arrStr.push(tempStr);
    }

    for (let j = 0; j < arrStr.length; j++) {
      if (arrStr[j] in doms) doms[arrStr[j]] += 1;
      else doms[arrStr[j]] = 1;
    }
  }
  return doms;
}

module.exports = getDNSStats;
