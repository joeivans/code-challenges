/**
 * @param {number[]} nums
 * @return {number}
 */
const findMiddleIndex = function (nums) {
// O(n) Time | O(1) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  let rightSum = 0;
  let leftSum = 0;

  for (const num of nums) {
    rightSum += num;
  }

  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += nums[i];
  }

  return -1;
};

module.exports = {
  findMiddleIndex
};
