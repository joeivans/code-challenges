/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (target, nums) {
// O(n) Time | O(1) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  const n = nums.length;

  let minLength = 0;
  let minLengthChanged = false;

  for (let l = 0, r = 0, sum = 0; r < n; r++) {
    // grow window
    //
    sum += nums[r];

    // shrink window to fit constraint
    //
    while (l <= r && sum >= target) {
      // update answer
      //
      if (!minLengthChanged || r - l + 1 < minLength) {
        minLength = r - l + 1;
        minLengthChanged = true;
      }

      sum -= nums[l];
      l++;
    }
  }

  return minLength;
};

module.exports = {
  minSubArrayLen
};
