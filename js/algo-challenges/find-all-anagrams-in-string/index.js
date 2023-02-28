/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
// O(n) Time | O(1) Space
//  n = s.length, p is bounded by s
//  Algorithm scales linearly with input string size.

  // bound p by s
  if (p.length > s.length) {
    return [];
  }

  const pMap = new Map();
  for (const c of p) {
    pMap.set(c, pMap.get(c) + 1 || 1);
  }

  const result = [];
  const windowMap = new Map();
  let l = 0;
  let r;
  for (r = 0; r < s.length; r++) {
    windowMap.set(s[r], windowMap.get(s[r]) + 1 || 1);

    if (r - l + 1 < p.length) {
      continue;
    }

    if (isAnagram(windowMap, pMap)) {
      result.push(l);
    }

    windowMap.set(s[l], windowMap.get(s[l]) - 1 || 0);
    if (windowMap.get(s[l]) === 0) {
      windowMap.delete(s[l]);
    }
    l++;
  }

  return result;
};

const isAnagram = function (aMap, bMap) {
  if (aMap.size !== bMap.size) {
    return false;
  }

  for (const aKey of aMap.keys()) {
    if (bMap.get(aKey) !== aMap.get(aKey)) {
      return false;
    }
  }

  return true;
};

module.exports = {
  findAnagrams
};
