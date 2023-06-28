/**
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRightDifference = function (nums) {
// O(n) Time | O(n) Space | O(1) Space Additional
//  n = nums.length
//  Algorithm scales linearly with input array size.

  const n = nums.length;

  const result = new Array(n);

  let prefix = 0;
  let suffix = 0;

  for (let i = 0; i < n; i++) {
    suffix += nums[i];
  }

  for (let i = 0; i < n; i++) {
    suffix -= nums[i];
    result[i] = Math.abs(suffix - prefix);
    prefix += nums[i];
  }

  return result;
};

module.exports = {
  leftRightDifference
};
