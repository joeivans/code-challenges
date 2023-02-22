/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
// O(s) Time | O(1) Space
//  s = all chars in strs
//  Algorithm scales linearly with input string size.

  if (strs.length === 1) {
    return strs[0];
  }

  let prefixEnd = 0;

  for (let col = 0; col < strs[0].length; col++) {
    const referenceChar = strs[0][col];

    for (let row = 1; row < strs.length; row++) {
      if (col >= strs[row].length || strs[row][col] !== referenceChar) {
        return strs[0].substring(0, prefixEnd);
      }
    }

    prefixEnd++;
  }

  return strs[0].substring(0, prefixEnd);
};

module.exports = {
  longestCommonPrefix
};
