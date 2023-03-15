/**
 * @param {string} s
 * @return {boolean}
 */
const canPermutePalindrome = function (s) {
// O(n) Time | O(n) Space
//  n = s.length
//  Algorithm scales linearly with input string size.

  let unevenCharCount = 0;
  const charCounts = new Map();

  for (const c of s) {

    charCounts.set(
      c,
      charCounts.get(c) + 1 || 1);

    if (isEven(charCounts.get(c))) {
      unevenCharCount++;
    } else {
      unevenCharCount--;
    }
  }

  return unevenCharCount <= 1;
};

const isEven = function (num) {
  return num % evenNumberModulo === 1;
};

const evenNumberModulo = 2;

module.exports = {
  canPermutePalindrome
};
