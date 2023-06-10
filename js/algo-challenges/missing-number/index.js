/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
// O(n) Time | O(1) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  const n = nums.length;

  const summation = n * (n + 1) / 2;
  let sumOfNums = 0;

  for (const num of nums) {
    sumOfNums += num;
  }

  return summation - sumOfNums;
};

module.exports = {
  missingNumber
};
