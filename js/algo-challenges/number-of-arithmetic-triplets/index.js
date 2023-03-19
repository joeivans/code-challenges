/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
const arithmeticTriplets = function (nums, diff) {
// O(n) Time | O(n) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  let count = 0;
  const set = new Set(nums);

  for (const num of nums) {
    if (set.has(num - diff) && set.has(num + diff)) {
      count++;
    }
  }

  return count;
};

module.exports = {
  arithmeticTriplets
};
