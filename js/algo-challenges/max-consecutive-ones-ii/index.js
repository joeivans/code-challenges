/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
// O(n) Time | O(1) Space
//  n = nums.length;
//  Algorithm scales linearly with input array size.

  const n = nums.length;
  const k = 1;

  let maxOnes = 0;
  let currZeros = 0;

  for (let l = 0, r = 0; r < n; r++) {
    // grow window
    //
    if (nums[r] === 0) {
      currZeros++;
    }

    // shrink window
    //
    while (l <= r && currZeros > k) {
      if (nums[l] === 0) {
        currZeros--;
      }

      l++;
    }

    // update answer
    //
    const currLength = r - l + 1;
    if (currLength > maxOnes) {
      maxOnes = currLength;
    }
  }

  return maxOnes;
};

module.exports = {
  findMaxConsecutiveOnes
};
