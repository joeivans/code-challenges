/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
const equalSubstring = function (s, t, maxCost) {
// O(n) Time | O(1) Space
//  n = s.length = t.length
//  Algorithm scales linearly with input string size.

  let maxLength = 0;
  let cost = 0;

  for (let l = 0, r = 0; r < s.length; r++) {
    cost += getAsciiAbsDiff(s[r], t[r]);

    while (cost > maxCost && l <= r) {
      cost -= getAsciiAbsDiff(s[l], t[l]);
      l++;
    }

    if (r - l + 1 > maxLength) {
      maxLength = r - l + 1;
    }
  }

  return maxLength;

  function getAsciiAbsDiff(a, b) {
    return Math.abs(
      a.charCodeAt(0) - b.charCodeAt(0));
  }
};

module.exports = {
  equalSubstring
};
