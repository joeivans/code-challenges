/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
const areSentencesSimilar = function (sentence1, sentence2, similarPairs) {
  /**
   * O(m + n) Time | O(n) Space
   *  m = sentence1.length, which equals sentence2.length
   *  n = total elements in similarPairs
   *  Algorithm scales linearly with input array sizes.
   */

  if (sentence1.length !== sentence2.length) {
    return false;
  }

  const map = makeSimilarPairsMap();

  for (let i = 0; i < sentence1.length; i++) {
    const wordA = sentence1[i];
    const wordB = sentence2[i];

    if (!isSimilarPair(wordA, wordB)) {
      return false;
    }
  }

  return true;

  function makeSimilarPairsMap() {
    const map = new Map();

    for (const [key, value] of similarPairs) {
      if (!map.has(key)) {
        map.set(key, new Set().add(value));
      } else {
        map.get(key).add(value);
      }
    }

    return map;
  }

  function isSimilarPair(wordA, wordB) {
    return wordA === wordB ||
      map.get(wordA)?.has(wordB) ||
      map.get(wordB)?.has(wordA);
  }
};

module.exports = {
  areSentencesSimilar
};
