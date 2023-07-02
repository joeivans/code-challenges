/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
const equalSubstring = function (s, t, maxCost) {
// O(n) Time | O(1) Space
//  n = s.length = t.length;
//  Algorithm scales linearly with input string sizes.

  const n = s.length;

  let maxLength = 0;

  for (let l = 0, r = 0, currCost = 0; r < n; r++) {
    // grow window
    //
    currCost += getCost(s[r], t[r]);

    // shrink window
    //
    while (l <= r && currCost > maxCost) {
      currCost -= getCost(s[l], t[l]);

      l++;
    }

    // update answer
    //
    if (r - l + 1 > maxLength) {
      maxLength = r - l + 1;
    }
  }

  return maxLength;
};

const getCost = function (a, b) {
  return Math.abs(a.charCodeAt(0) - b.charCodeAt(0));
};

module.exports = {
  equalSubstring
};
