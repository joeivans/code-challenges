/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
// O(n) Time | O(1) Space
//  n = input array size
//  Algorithm scales linearly with input array size.

  let l;
  let r;
  let max = 0;

  for (l = 0, r = 0; r < nums.length; r++) {
    if (nums[r] !== 1) {
      l = r + 1;
      continue;
    }

    while (l < r && nums[l] !== 1) {
      l++;
    }

    if (r - l + 1 > max) {
      max = r - l + 1;
    }
  }

  return max;
};

module.exports = {
  findMaxConsecutiveOnes
};
