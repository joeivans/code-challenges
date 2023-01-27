/**
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLEList = function (nums) {
// O(nm) Time | O(m) Space
//  n = input array size
//  m = max(all frequency values)
//  Algorithm scales linearly with input array size and max frequency value.

  const result = [];

  for (let frequencyIndex = 0; frequencyIndex < nums.length; frequencyIndex += 2) {
    for (let i = 0; i < nums[frequencyIndex]; i++) {
      result.push(nums[frequencyIndex + 1]);
    }
  }

  return result;
};

module.exports = {
  decompressRLEList
};
