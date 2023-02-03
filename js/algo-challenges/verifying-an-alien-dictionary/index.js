/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = function (words, order) {
// O(m) Time | O(1) Space
//  m = all chars in words array
//  n = order.length
//  Algorithm scales linearly with input array size.

  const map = new Map();
  for (let i = 0; i < order.length; i++) {
    map.set(order[i], i);
  }

  for (let i = 0; i + 1 < words.length; i++) {
    const wordA = words[i];
    const wordB = words[i + 1];
    let lexA = map.get(wordA[0]);
    let lexB = map.get(wordB[0]);

    for (let j = 0; lexA >= lexB && j < wordA.length; j++) {
      lexA = map.get(wordA[j]);
      lexB = map.get(wordB[j]);

      if (j >= wordB.length || lexA > lexB) {
        return false;
      }
    }
  }

  return true;
};

module.exports = {
  isAlienSorted
};
