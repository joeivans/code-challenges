/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
const reversePrefix = function (word, ch) {
// O(n) Time | O(n) Space
//  n = word.length
//  Algorithm scales linearly with input string length.

  const targetIndex = getTargetIndex();

  if (targetIndex === word.length) {
    return word;
  }

  const result = word.split('');
  reverseRange(0, targetIndex);

  return result.join('');

  function getTargetIndex() {
    let i = 0;

    while (i < word.length && word[i] !== ch) {
      i++;
    }

    return i;
  }

  function reverseRange(left, right) {
    while (left < right) {
      const previousRightValue = result[right];
      result[right] = result[left];
      result[left] = previousRightValue;

      left++;
      right--;
    }
  }
};

module.exports = {
  reversePrefix
};
