/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function (nums, k) {
// O(n) Time | O(1) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  let largestSum = 0;
  let largestSumChanged = false;
  let currSum = 0;

  for (let l = 0, r = 0; r < nums.length; r++) {

    // grow window
    currSum += nums[r];

    // ensure window sized k
    if (r - l + 1 < k) {
      continue;
    }

    // update answer
    if (largestSumChanged) {
      if (currSum > largestSum) {
        largestSum = currSum;
      }
    } else {
      largestSum = currSum;
      largestSumChanged = true;
    }

    // shrink window for next iteration
    currSum -= nums[l];
    l++;
  }

  return largestSum / k;
};

module.exports = {
  findMaxAverage
};
