/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  /*
   * O(m*n) Time | O(1) Space
   *  m = haystack.length
   *  n = needle.length
   *  Algorithm scales quadratically with input size.
   */

  let right = 0;

  while (right < haystack.length) {
    const left = right;
    let nextWindowStart = left + 1;
    let nextWindowStartChanged = false;
    let i = 0;
    while (haystack[right] === needle[i]) {
      right++;
      i++;

      if (i === needle.length) {
        return left;
      }

      if (!nextWindowStartChanged && haystack[right] === needle[0]) {
        nextWindowStart = right;
        nextWindowStartChanged = true;
      }
    }

    right = nextWindowStart;
  }

  return -1;
};

module.exports = {
  strStr
};
