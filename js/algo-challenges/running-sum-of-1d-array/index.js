/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
// O(n) Time | O(n) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  const n = nums.length;

  const prefixSum = new Array(n);

  prefixSum[0] = nums[0];
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
  }

  return prefixSum;
};

module.exports = {
  runningSum
};
