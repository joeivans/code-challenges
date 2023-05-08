/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
// O(n) Time | O(1) Space
//  n = t.length
//  Algorithm scales linearly with input string t's size.

  // bound runtime by t.length
  if (s.length > t.length) {
    return false;
  }

  // two pointers tracking indices
  // while loop's && condition exits loop early if problem solved
  let sIdx = 0;
  let tIdx = 0;
  while (tIdx < t.length && sIdx < s.length) {
    if (t[tIdx] === s[sIdx]) {
      sIdx++;
    }

    tIdx++;
  }

  return sIdx === s.length;
};

module.exports = {
  isSubsequence
};
