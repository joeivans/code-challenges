/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function(nums, n) {
// O(n) Time | O(1) Space
//  n = input array size
//  Algorithm scales linearly with input array size.

  const result = new Array(2 * n);

  for (let i = 0; i < n; i++) {
    result[2 * i] = nums[i];
    result[2 * i + 1] = nums[i + n];
  }

  return result;
};

module.exports = {
  shuffle
};
