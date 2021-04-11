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
  let str = n.toString();
  let min = '9';
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) <= Number(min)) {
      min = str[i];
    }
  }
  str = str.replace(min, '');
  return Number(str);
}

module.exports = deleteDigit;
