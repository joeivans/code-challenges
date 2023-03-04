/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
// O(n) Time | O(1) Space
//  n = s.length = t.length
//  Algorithm scales linearly with input string size.

  if (s.length !== t.length) {
    return false;
  }

  const getKey = c => c.charCodeAt(0) - 'a'.charCodeAt(0);

  const lCaseEnglishAsciiLetters = 26;
  const sMap = new Array(lCaseEnglishAsciiLetters).fill(0);
  for (const c of s) {
    sMap[getKey(c)]++;
  }

  for (const c of t) {
    const tKey = getKey(c);
    sMap[tKey]--;

    if (sMap[tKey] < 0) {
      return false;
    }
  }

  return true;
};

module.exports = {
  isAnagram
};
