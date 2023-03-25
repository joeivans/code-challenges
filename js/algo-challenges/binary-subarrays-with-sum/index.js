/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
const numSubarraysWithSum = function (nums, goal) {
// O(n) Time | O(n) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  const counts = new Map();
  counts.set(0, 1);

  let ans = 0;
  let curr = 0;

  for (const num of nums) {
    curr += num;

    ans += counts.get(curr - goal) || 0;
    counts.set(
      curr,
      counts.get(curr) + 1 || 1);
  }

  return ans;
};

module.exports = {
  numSubarraysWithSum
};
