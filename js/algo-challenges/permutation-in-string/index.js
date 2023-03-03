/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function(s1, s2) {
// O(m + n) Time | O(1) Space
//  m = s1.length
//  n = s2.length
//  Algorithm scales linearly with input string sizes.

  if (s1.length > s2.length) {
    return false;
  }

  const alphabetLength = 26;
  const pMap = new Array(alphabetLength).fill(0);
  for (const c of s1) {
    pMap[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  let l;
  let r;
  let charsRemaining = s1.length;
  for (l = 0, r = 0; r < s2.length; r++) {
    const charCodeAtRight = s2[r].charCodeAt(0) - 'a'.charCodeAt(0);
    if (pMap[charCodeAtRight] > 0) {
      charsRemaining--;
    }
    pMap[charCodeAtRight]--;

    if (charsRemaining === 0) {
      return true;
    }

    if (r - l + 1 < s1.length) {
      continue;
    }

    const charCodeAtLeft = s2[l].charCodeAt(0) - 'a'.charCodeAt(0);
    if (pMap[charCodeAtLeft] >= 0) {
      charsRemaining++;
    }
    pMap[charCodeAtLeft]++;
    l++;
  }

  return false;
};

module.exports = {
  checkInclusion
};
