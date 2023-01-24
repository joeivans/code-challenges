/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = function (sentences) {
// O(nm) Time | O(1) Space
//  n = number of strings in input array
//  m = number of characters in each string
//  Algorithm scales linearly with input size.

  let maxWords = 0;

  for (const sentence of sentences) {
    let numberOfSpaces = 0;

    for (const c of sentence) {
      if (c === ' ') {
        numberOfSpaces++;
      }
    }

    // number of words = number of spaces + 1
    if (numberOfSpaces + 1 > maxWords) {
      maxWords = numberOfSpaces + 1;
    }
  }

  return maxWords;
};

module.exports = {
  mostWordsFound
};
