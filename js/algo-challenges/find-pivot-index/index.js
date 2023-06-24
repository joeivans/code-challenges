/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
// O(n) Time | O(1) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  const n = nums.length;

  let suffixSum = 0;

  for (const num of nums) {
    suffixSum += num;
  }

  for (let i = 0, prefixSum = 0; i < n; i++) {
    suffixSum -= nums[i];

    if (prefixSum === suffixSum) {
      return i;
    }

    prefixSum += nums[i];
  }

  return -1;
};

module.exports = {
  pivotIndex
};
