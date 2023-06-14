/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
// O(n) Time | O(1) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  const n = nums.length;

  for (let w = 0, r = 0; r < n; r++) {
    if (nums[r] !== 0) {
      // if you don't swap and hard code a zero, single element array [1] will fail.
      const temp = nums[w];
      nums[w] = nums[r];
      nums[r] = temp;

      w++;
    }
  }
};

module.exports = {
  moveZeroes
};
