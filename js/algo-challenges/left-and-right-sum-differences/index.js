/**
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRigthDifference = function (nums) {
// O(n) Time | O(n) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  const leftSum = new Array(nums.length);
  const rightSum = new Array(nums.length);

  leftSum[0] = 0;
  for (let i = 1; i < nums.length; i++) {
    leftSum[i] = leftSum[i - 1] + nums[i - 1];
  }

  rightSum[nums.length - 1] = 0;
  for (let i = nums.length - 1 - 1; i >= 0; i--) {
    rightSum[i] = rightSum[i + 1] + nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    if (rightSum[i] > leftSum[i]) {
      rightSum[i] = rightSum[i] - leftSum[i];
    } else {
      rightSum[i] = leftSum[i] - rightSum[i];
    }
  }

  return rightSum;
};

module.exports = {
  leftRigthDifference
};
