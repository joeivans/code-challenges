/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
// O(n) Time | O(1) Space
//  n = s.length
//  Algorithm scales linearly with input string size.

  const n = s.length;

  for (let l = 0, r = n - 1; l < r; l++, r--) {
    while (l < r && !CharUtils.isAlphanumeric(s[l])) {
      l++;
    }
    while (l < r && !CharUtils.isAlphanumeric(s[r])) {
      r--;
    }

    if (!CharUtils.isEqualIgnoreCase(s[l], s[r])) {
      return false;
    }
  }

  return true;
};

class CharUtils {
  static #charCodes = new Map([
    ['a', 'a'.charCodeAt(0)],
    ['z', 'z'.charCodeAt(0)],
    ['A', 'A'.charCodeAt(0)],
    ['Z', 'Z'.charCodeAt(0)],
    ['0', '0'.charCodeAt(0)],
    ['9', '9'.charCodeAt(0)],
  ]);

  static isAlphanumeric(c) {
    return CharUtils.isAlpha(c) || CharUtils.isNumeric(c);
  }

  static isNumeric(c) {
    const code = c.charCodeAt(0);

    return code >= CharUtils.#charCodes.get('0') && code <= CharUtils.#charCodes.get('9');
  }

  static isAlpha(c) {
    const code = c.charCodeAt(0);

    return (code >= CharUtils.#charCodes.get('a') && code <= CharUtils.#charCodes.get('z')) ||
      (code >= CharUtils.#charCodes.get('A') && code <= CharUtils.#charCodes.get('Z'));
  }

  static isEqualIgnoreCase(c1, c2) {
    const c1Code = c1.charCodeAt(0);
    const c2Code = c2.charCodeAt(0);

    if (c1Code === c2Code) {
      return true;
    }

    if (CharUtils.isAlpha(c1) && CharUtils.isAlpha(c2)) {
      return Math.abs(c1Code - c2Code) === 32;
    }

    return false;
  }
}

module.exports = {
  isPalindrome
};
