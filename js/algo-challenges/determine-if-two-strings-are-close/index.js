/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = function (word1, word2) {
// O(n) Time | O(n) Space
//  n = word1.length and word2.length, which are equal
//  Algorithm scales linearly with input string sizes.

  if (word1.length !== word2.length) {
    return false;
  }

  let map1 = new Map();
  let map2 = new Map();

  for (let i = 0; i < word1.length; i++) {
    map1.set(word1[i], map1.get(word1[i]) + 1 || 1);
    map2.set(word2[i], map2.get(word2[i]) + 1 || 1);
  }

  // ensure same characters in word1 as word2 or cannot swap
  for (const k of map1.keys()) {
    if (map2.get(k) === undefined) {
      return false;
    }
  }

  map1 = getFrequencyValuesMap(map1);
  map2 = getFrequencyValuesMap(map2);

  if (map1.length !== map2.length) {
    return false;
  }

  for (const [k, v] of map1) {
    if (map2.get(k) !== v) {
      return false;
    }
  }

  return true;
};

const getFrequencyValuesMap = function (map) {
  const result = new Map();

  for (const v of map.values()) {
    result.set(v, result.get(v) + 1 || 1);
  }

  return result;
};

module.exports = {
  closeStrings
};
