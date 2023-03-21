/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function (s, k) {
// O(n) Time | O(n) Space
//  n = s.length
//  Algorithm scales linearly with input string size.

  const charArray = s.split('');

  let l = 0;
  let r = 0;
  while (l < s.length) {

    if (l + k - 1 >= s.length) {
      r = s.length - 1;
    } else {
      r = l + k - 1;
    }

    const oldL = l;

    while (l < r) {
      const temp = charArray[r];
      charArray[r] = charArray[l];
      charArray[l] = temp;

      l++;
      r--;
    }

    l = oldL + k + k;
  }

  return charArray.join('');
};

module.exports = {
  reverseStr
};
