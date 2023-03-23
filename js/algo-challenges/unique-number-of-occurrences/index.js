/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function (arr) {
// O(n) Time | O(n) Space
//  n = arr.length
//  Algorithm scales linearly with input array size.

  const valueMap = new Map();
  const freqSet = new Set();

  for (const num of arr) {
    valueMap.set(
      num,
      valueMap.get(num) + 1 || 1);
  }

  for (const [, value] of valueMap) {
    freqSet.add(value);
  }

  return freqSet.size === valueMap.size;
};

module.exports = {
  uniqueOccurrences
};
