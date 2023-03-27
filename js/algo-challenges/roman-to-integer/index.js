/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
// O(n) Time | O(1) Space
//  n = s.length
//  Algorithm scales linearly with input string size.

  let ans = 0;

  let l = 0;
  for (let r = 1; r < s.length; l++, r++) {
    if (romanMap.get(s[l]) < romanMap.get(s[r])) {
      ans -= romanMap.get(s[l]);
    } else {
      ans += romanMap.get(s[l]);
    }
  }

  while (l < s.length) {
    ans += romanMap.get(s[l]);
    l++;
  }

  return ans;
};

const romanMap = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000]]);

module.exports = {
  romanToInt
};
