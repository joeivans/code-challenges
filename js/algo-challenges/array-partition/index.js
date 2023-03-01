/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function (nums) {
// O(nlog(n)) Time | O(n) Space
//  n = nums.length
//  Algorithm scales linearithmically with input array size.

  let sum = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }

  return sum;
};

module.exports = {
  arrayPairSum
};
