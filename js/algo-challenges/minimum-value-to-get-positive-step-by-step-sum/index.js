/**
 * @param {number[]} nums
 * @return {number}
 */
const minStartValue = function (nums) {
// O(n) Time | O(1) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  let prefixSum = nums[0];
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {

    prefixSum += nums[i];

    if (prefixSum < min) {
      min = prefixSum;
    }

  }

  if (min >= 1) {
    return 1;
  }

  return min * -1 + 1;
};

module.exports = {
  minStartValue
};
