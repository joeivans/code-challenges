/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = function (nums, k) {
// O(n) Time | O(1) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  const n = nums.length;

  let maxOnes = 0;

  for (let l = 0, r = 0, currZeros = 0; r < n; r++) {
    // grow window
    //
    if (nums[r] === 0) {
      currZeros++;
    }

    // shrink window to constraint
    //
    while (l <= r && currZeros > k) {
      if (nums[l] === 0) {
        currZeros--;
      }

      l++;
    }

    // update answer
    //
    if (r - l + 1 > maxOnes) {
      maxOnes = r - l + 1;
    }
  }

  return maxOnes;
};

module.exports = {
  longestOnes
};
