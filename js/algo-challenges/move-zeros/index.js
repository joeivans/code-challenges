/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
// O(n) Time | O(1) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  const targetNum = 0;

  let write = 0;

  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== targetNum) {
      const previousNumsWrite = nums[write];
      nums[write] = nums[read];

      if (previousNumsWrite === targetNum) {
        nums[read] = targetNum;
      }

      write++;
    }
  }
};

module.exports = {
  moveZeroes
};
