/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = function (s) {
// O(n) Time | O(n) Space
//  n = s.length
//  Algorithm scales linearly with input string length.

  const minInputSize = 2;
  if (s.length < minInputSize) {
    return s;
  }

  const result = [];

  for (const c of s) {

    if (result[result.length - 1] === c) {
      result.pop();
    } else {
      result.push(c);
    }

  }

  return result.join('');
};

module.exports = {
  removeDuplicates
};
