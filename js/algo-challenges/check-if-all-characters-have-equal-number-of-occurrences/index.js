/**
 * @param {string} s
 * @return {boolean}
 */
const areOccurrencesEqual = function (s) {
// O(n) Time | O(n) Space
//  n = s.length
//  Algorithm scales linearly with input string length.

  const frequencyMap = new Map();
  const frequencySet = new Set();

  // map all chars of input string
  for (const c of s) {
    frequencyMap.set(
      c,
      frequencyMap.get(c) + 1 || 1);
  }

  // make a set of all the frequencies
  for (const [, frequency] of frequencyMap) {
    frequencySet.add(frequency);
  }

  // there should only be one frequency
  return frequencySet.size === 1;
};

module.exports = {
  areOccurrencesEqual
};
