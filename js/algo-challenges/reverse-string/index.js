/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
// O(n) Time | O(1) Space
//  n = s.length
//  Algorithm scales linearly with input char array size.

  const n = s.length;

  for (let l = 0, r = n - 1; l < r; l++, r--) {
    const lPrev = s[l];

    s[l] = s[r];
    s[r] = lPrev;
  }
};

module.exports = {
  reverseString
};
