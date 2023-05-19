/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k) {
// O(n) Time | O(n) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  let answer = 0;
  const prefixSumFrequencyMap = new Map();

  let prefixSum = 0;
  prefixSumFrequencyMap.set(0, 1);
  for (const num of nums) {

    prefixSum += num;

    if (prefixSumFrequencyMap.get(prefixSum - k) !== undefined) {
      answer += prefixSumFrequencyMap.get(prefixSum - k);
    }

    prefixSumFrequencyMap.set(
      prefixSum,
      prefixSumFrequencyMap.get(prefixSum) + 1 || 1
    );

  }

  return answer;
};

module.exports = {
  subarraySum
};
