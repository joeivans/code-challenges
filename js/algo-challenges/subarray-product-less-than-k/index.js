/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = function (nums, k) {
// O(n) Time | O(1) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  const n = nums.length;

  let numberOfSubarrays = 0;

  for (let l = 0, r = 0, curr = 1; r < n; r++) {
    // grow window
    //
    curr *= nums[r];

    // shrink window
    //
    while (l <= r && curr >= k) {
      curr /= nums[l];

      l++;
    }

    // update answer
    //
    numberOfSubarrays += r - l + 1;
  }

  return numberOfSubarrays;
};

module.exports = {
  numSubarrayProductLessThanK
};
