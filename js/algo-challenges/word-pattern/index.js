/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
// O(n) Time | O(n + m) Space
//  m = pattern.length
//  n = s.length
//  Algorithm scales linearly with input string sizes.

  const wordArray = s.split(' ');

  if (wordArray.length !== pattern.length) {
    return false;
  }

  const map = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const key = `k:${pattern[i]}`;
    const value = `v:${wordArray[i]}`;

    if (map.get(key) === undefined) {
      map.set(key, i);
    }

    if (map.get(value) === undefined) {
      map.set(value, i);
    }

    if (map.get(key) !== map.get(value)) {
      return false;
    }
  }

  return true;
};

module.exports = {
  wordPattern
};
