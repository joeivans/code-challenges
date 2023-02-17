/**
 * @param {string} s
 * @return {string}
 */
const reverseOnlyLetters = function (s) {
// O(n) Time | O(n) Space
//  n =  s.length
//  Algorithm scales linearly with input string size.

  const aUpperCode = 65;
  const zUpperCode = 90;
  const aLowerCode = 97;
  const zLowerCode = 122;

  const result = s.split('');

  let l = 0, r = s.length - 1;
  while (l < r) {
    if (!isLetter(result[r])) {
      r--;
    } else if (!isLetter(result[l])) {
      l++;
    } else {
      const t = result[r];
      result[r] = result[l];
      result[l] = t;
      l++;
      r--;
    }
  }

  return result.join('');

  function isLetter(c) {
    const code = c.charCodeAt(0);
    return (code >= aUpperCode && code <= zUpperCode) ||
      (code >= aLowerCode && code <= zLowerCode);
  }
};

module.exports = {
  reverseOnlyLetters
};
