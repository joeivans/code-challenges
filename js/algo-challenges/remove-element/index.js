/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
// O(n) Time | O(1) Space
//  n = nums.length
//  Algorithm scales linearly with input size.

  let read = 0;
  let newLength = nums.length;

  while (read < newLength) {
    if (nums[read] === val) {
      newLength--;
      nums[read] = nums[newLength];
    } else {
      read++;
    }
  }

  return newLength;
};

module.exports = {
  removeElement
};
