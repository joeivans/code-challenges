/**
 * @param {string} s
 * @return {string}
 */
const removeVowels = function (s) {
// O(n) Time | O(n) Space
//  n = input string length
//  Algorithm scales linearly with input string size.

  const targetChars = new Set(['a', 'e', 'i', 'o', 'u']);

  let vowelCount = 0;
  for (const c of s) {
    if (targetChars.has(c)) {
      vowelCount++;
    }
  }

  const result = new Array(s.length - vowelCount);
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (!targetChars.has(c)) {
      result[i] = c;
    }
  }

  return result.join('');
};

module.exports = {
  removeVowels
};
