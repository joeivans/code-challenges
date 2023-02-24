/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = function (s, k) {
// O(n) Time | O(1) Space
//  n = s.length
//  Algorithm scales linearly with input string size.

  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let vowelCount = 0;
  let max = 0;

  let l = 0;
  for (let r = 0; r < s.length; r++) {
    if (isVowel(s[r])) {
      vowelCount++;
    }

    if (r - l + 1 < k) {
      continue;
    }

    if (vowelCount > max) {
      max = vowelCount;
    }

    if (isVowel(s[l])) {
      vowelCount--;
    }

    l++;
  }

  return max;

  function isVowel(c) {
    return vowels.has(c);
  }
};

module.exports = {
  maxVowels
};
