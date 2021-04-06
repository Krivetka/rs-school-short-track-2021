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
  const str = `${n}`;
  let str1;
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    str1 = '';
    for (let j = 0; j < str.length; j++) {
      if (i !== j) str1 += str[j];
    }
    if (Number.parseInt(str1, 10) > max) max = Number.parseInt(str1, 10);
  }
  return max;
}

module.exports = deleteDigit;
