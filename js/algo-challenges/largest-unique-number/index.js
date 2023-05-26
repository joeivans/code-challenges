/**
 * @param {number[]} nums
 * @return {number}
 */
const largestUniqueNumber = function (nums) {
// O(n) Time | O(n) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  const map = new Map();

  for (const num of nums) {
    map.set(
      num,
      map.get(num) + 1 || 1
    );
  }

  let max;
  for (const [num, frequency] of map) {
    if (frequency === 1 && (max === undefined || num > max)) {
      max = num;
    }
  }

  return max !== undefined
    ? max
    : -1;
};

module.exports = {
  largestUniqueNumber
};
