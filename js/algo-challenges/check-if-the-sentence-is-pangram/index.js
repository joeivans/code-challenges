/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = function (sentence) {
// O(n) Time | O(1) Space
//  n = sentence.length
//  Space is bounded by 26 possible chars in set, no duplicates.

  return new Set(sentence).size === COUNT_OF_LCASE_ALPHABET;
};

const COUNT_OF_LCASE_ALPHABET = 26;

module.exports = {
  checkIfPangram
};
