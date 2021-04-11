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
  let newStr = '';
  for (let j = 0; j < str.length; j++) {
    if (str[j] !== str[j + 1]) {
      newStr += str[j];
    } else {
      let count = 1;
      while (str[j] === str[j + 1]) {
        count++;
        j++;
      }
      newStr += `${count}${str[j]}`;
    }
  }
  return newStr;
}

module.exports = encodeLine;
