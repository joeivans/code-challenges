/**
 * @param {number[]} nums
 * @return {number}
 */
const waysToSplitArray = function (nums) {
// O(n) Time | O(1) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  let numOfSplits = 0;
  let leftSide = 0;
  let rightSide = 0;

  for (const num of nums) {
    rightSide += num;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    leftSide += nums[i];
    rightSide -= nums[i];

    if (leftSide >= rightSide) {
      numOfSplits++;
    }
  }

  return numOfSplits;
};

module.exports = {
  waysToSplitArray
};
