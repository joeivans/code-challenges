/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
// O(n) Time | O(n) Space | n = s.length

  let result = 0;

  for (let n = s.length, l = 0, r = 0, map = new Map(); r < n; r++) {
    // grow
    map.set(
      s[r],
      map.get(s[r]) + 1 || 1
    );

    // shrink
    // if there's a duplicate, we just added it at s[r]
    while (map.get(s[r]) > 1 && l <= r) {
      map.set(
        s[l],
        map.get(s[l]) - 1
      );

      l++;
    }
    // update
    result = Math.max(result, r - l + 1);
  }

  return result;
};

module.exports = {
  lengthOfLongestSubstring
};
