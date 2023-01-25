/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function (nums) {
// O(nlogn) Time | O(n) Space
//  n = nums.length
//  Algorithm scales linearithmically with input array size.

  const result = new Array(nums.length);
  const sortedNums = Array.from(nums);
  const map = new Map();

  sortedNums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length; i++) {
    if (!map.has(sortedNums[i])) {
      map.set(sortedNums[i], i);
    }
  }

  for (let i = 0; i < result.length; i++) {
    result[i] = map.get(nums[i]);
  }

  return result;
};

module.exports = {
  smallerNumbersThanCurrent
};
