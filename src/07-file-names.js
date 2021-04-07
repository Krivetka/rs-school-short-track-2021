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
  let set1 = new Set(names);
  let names1 = names;
  while (names1.length !== set1.size) {
    const arr = [];
    arr.push(names1[0]);
    let count;
    for (let i = 1; i < names1.length; i++) {
      count = 0;
      for (let j = 0; j < i; j++) {
        if (names1[i] === names1[j]) count++;
      }
      if (count > 0) arr.push(`${names1[i]}(${count})`);
      else arr.push(names1[i]);
    }
    names1 = arr;
    set1 = new Set(names1);
  }
  return names1;
}

module.exports = renameFiles;
