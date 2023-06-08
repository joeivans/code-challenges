/**
 * @param {number[]} nums
 * @return {number}
 */
const waysToSplitArray = function (nums) {
// O(n) Time | O(1) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  const n = nums.length;

  let prefixSum = 0;
  let suffixSum = 0;
  let answer = 0;

  for (const num of nums) {
    suffixSum += num;
  }

  for (let i = 0; i < n - 1; i++) {
    prefixSum += nums[i];
    suffixSum -= nums[i];

    if (prefixSum >= suffixSum) {
      answer++;
    }
  }

  return answer;
};

module.exports = {
  waysToSplitArray
};
