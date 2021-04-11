/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const NewNames = names;
  let i2 = 1;
  let c = 1;
  for (let j = 0; j < names.length; j++) {
    for (let i = i2; i < names.length; i++) {
      if (names[j] === names[i]) {
        NewNames[i] = `${names[j]}(${c})`;
        c++;
      }
    }
    i2++;
    c = 1;
  }
  return NewNames;
}

module.exports = renameFiles;
