/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
// O(n) Time | O(n) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  const result = new Array(nums.length);
  const prefix = new Array(nums.length);
  const suffix = new Array(nums.length);

  prefix[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  suffix[nums.length - 1] = 1;
  for (let i = nums.length - 1 - 1; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    result[i] = (prefix[i] * suffix[i]) >> 0;
  }

  return result;
};

module.exports = {
  productExceptSelf
};
