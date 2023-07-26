/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
// O(n) Time | O(1) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  const n = nums.length;

  for (let i = 0, prefix = 0; i < n; i++) {
    prefix += nums[i];

    nums[i] = prefix;
  }

  return nums;
};

module.exports = {
  runningSum
};
