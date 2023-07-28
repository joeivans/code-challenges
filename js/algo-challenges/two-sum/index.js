/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
// O(n) Time | O(n) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  const n = nums.length;

  const indexMap = new Map();

  for (let i = 0; i < n; i++) {
    const complement = target - nums[i];

    if (indexMap.get(complement) !== undefined) {
      return [indexMap.get(complement), i];
    }

    indexMap.set(
      nums[i],
      i
    );
  }

  throw new Error(`Did not find two sum.`);
};

module.exports = {
  twoSum
};
