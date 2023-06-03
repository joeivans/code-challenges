/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const getAverages = function (nums, k) {
// O(n) Time | O(n) Space, O(1) Additional
//  n = nums.length
//  Algorithm scales linearly with input array size.

  // -1 fill result array
  //
  const result = new Array(nums.length).fill(-1);

  // prefix sum sliding window
  //
  // first half [0, windowRightBound)
  //
  const windowRightBound = k + k;
  const windowSize = windowRightBound + 1;
  let prefixSum = 0;
  for (let r = 0; r < windowRightBound; r++) {
    prefixSum += nums[r];
  }
  // second half [windowRightBound, nums.length)
  //
  for (let l = 0, r = windowRightBound; r < nums.length; r++, l++) {
    // grow window
    //
    prefixSum += nums[r];

    // update answer
    //
    result[k + l] = Math.trunc(prefixSum / windowSize);

    // shrink window
    //
    prefixSum -= nums[l];
  }

  return result;
};

module.exports = {
  getAverages
};
