/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const lengthOfLongestSubstringKDistinct = function (s, k) {
// O(n) Time | O(k) Space
//  n = s.length
//  k = integer value of k
//  Algorithm scales linearly with input string size.

  let maxLen = 0;
  const charMap = new Map();

  for (let l = 0, r = 0; r < s.length; r++) {

    charMap.set(
      s[r],
      charMap.get(s[r]) + 1 || 1);

    while (l <= r && charMap.size > k) {

      charMap.set(
        s[l],
        charMap.get(s[l]) - 1 || 0);

      if (charMap.get(s[l]) < 1) {
        charMap.delete(s[l]);
      }

      l++;
    }

    if (r - l + 1 > maxLen) {
      maxLen = r - l + 1;
    }
  }

  return maxLen;
};

module.exports = {
  lengthOfLongestSubstringKDistinct
};
