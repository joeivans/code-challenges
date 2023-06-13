/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function (s) {
// O(n) Time | O(1) Space
//  n = s.length
//  Algorithm scales linearly with input string size.

  const n = s.length;

  for (let l = 0, r = n - 1; l < r; l++, r--) {
    if (s[l] !== s[r]) {
      return isPalindrome(l + 1, r) || isPalindrome(l, r - 1);
    }
  }

  return true;

  function isPalindrome(l, r) {
    while (l < r) {
      if (s[l] !== s[r]) {
        return false;
      }

      l++;
      r--;
    }

    return true;
  }
};

module.exports = {
  validPalindrome
};
