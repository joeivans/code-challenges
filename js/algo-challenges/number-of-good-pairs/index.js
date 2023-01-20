/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function (nums) {
// O(n) Time | O(n) Space
//  n = input array size
//  Algorithm scales linearly with input array size.

  let pairCount = 0;
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const key of map.keys()) {
    const value = map.get(key);
    if (value > 1) {
      pairCount += Math.trunc((value * (value - 1)) / 2);
    }
  }

  return pairCount;
};

module.exports = {
  numIdenticalPairs
};
