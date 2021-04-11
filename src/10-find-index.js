/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let end = array.length;
  let mid = 0;
  let index = 0;
  for (let i = start; i <= end; i++) {
    mid = Math.floor((start + end) / 2);
    if (array[mid] === value) {
      index = mid;
      break;
    } else if (value < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return index;
}

module.exports = findIndex;
