/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
// O(n) Time | O(1) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  const expectedSum = nums.length * (nums.length + 1) / 2;
  let actualSum = 0;

  for (const num of nums) {

    actualSum += num;

  }

  return expectedSum - actualSum;
};

module.exports = {
  missingNumber
};
