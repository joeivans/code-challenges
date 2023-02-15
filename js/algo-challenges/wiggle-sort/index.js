/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const wiggleSort = function (nums) {
// O(n) Time | O(1) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  for (let i = 0; i < nums.length - 1; i++) {
    switch (i % 2) {
      case 0:
        if (nums[i] > nums[i + 1]) {
          swap(i, i + 1);
        }
        break;
      default:
        if (nums[i] < nums[i + 1]) {
          swap(i, i + 1);
        }
    }
  }

  function swap(idxA, idxB) {
    const temp = nums[idxA];
    nums[idxA] = nums[idxB];
    nums[idxB] = temp;
  }
};

module.exports = {
  wiggleSort
};
