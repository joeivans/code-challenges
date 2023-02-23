/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
// O(n) Time | O(1) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  // Kadane's algorithm
  //  for each num of nums
  //   sum = maximum(num, num + sum)
  //   maxSum = maximum(sum, maxSum)
  let sum;
  let maxSum;
  for (const num of nums) {
    sum = Math.max(num, num + sum || 0);
    maxSum = Math.max(sum, maxSum || 0);
  }
  return maxSum;
};

module.exports = {
  maxSubArray
};
