/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
// O(n) Time | O(n) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  const result = new Array(nums.length);

  let l = 0;
  let r = nums.length - 1;
  for (let i = r; i >= 0; i--) {
    if (Math.abs(nums[l]) > Math.abs(nums[r])) {
      result[i] = nums[l] * nums[l];
      l++;
    } else {
      result[i] = nums[r] * nums[r];
      r--;
    }
  }

  return result;
};

module.exports = {
  sortedSquares
};
