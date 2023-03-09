/**
 * @param {string[]} words
 * @return {string[]}
 */
const commonChars = function (words) {
// O(m) Time | O(m) Space
//  m = total number of chars in words
//  Algorithm scales linearly with input array size.

  const sharedMap = new Map();

  // start sharedMap with first word
  for (const c of words[0]) {
    sharedMap.set(
      c,
      sharedMap.get(c) + 1 || 1);
  }

  // continue for remaining words
  for (let i = 1; i < words.length; i++) {

    const wordMap = new Map();
    for (const c of words[i]) {
      wordMap.set(
        c,
        wordMap.get(c) + 1 || 1);
    }

    // compare sharedMap to wordMap
    for (const c of sharedMap.keys()) {
      if (wordMap.has(c)) {
        sharedMap.set(
          c,
          Math.min(
            sharedMap.get(c),
            wordMap.get(c)));
      } else {
        sharedMap.delete(c);
      }
    }

  }

  // prepare result
  const result = [];
  for (const c of sharedMap.keys()) {
    for (let i = 0; i < sharedMap.get(c); i++) {
      result.push(c);
    }
  }

  return result;
};

module.exports = {
  commonChars
};
