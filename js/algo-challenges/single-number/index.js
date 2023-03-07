/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
// O(n) Time | O(1) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  let mask = 0;

  for (const num of nums) {
    mask ^= num;
  }

  return mask;
};

module.exports = {
  singleNumber
};
