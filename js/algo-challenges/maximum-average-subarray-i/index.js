/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function (nums, k) {
// O(n) Time | O(1) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  const n = nums.length;

  let maxSum = 0;

  // grow first window sized k
  //
  for (let r = 0; r < k; r++) {
    maxSum += nums[r];
  }

  // slide window
  //
  for (let l = 0, r = k, sum = maxSum; r < n; r++) {
    // grow window
    //
    sum += nums[r];

    // shrink window by 1 only
    //
    sum -= nums[l];
    l++;

    // update answer
    //
    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  return maxSum / k;
};

module.exports = {
  findMaxAverage
};
