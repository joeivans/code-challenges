/**
 * @param {number[][]} nums
 * @return {number[]}
 */
const intersection = function (nums) {
// O(n logn) Time | O(n) Space
//  n = all elements in nums
//  Algorithm scales linearithmically with input array size.

  const result = [];
  const map = new Map();

  for (const arr of nums) {
    for (const num of arr) {
      map.set(
        num,
        map.get(num) + 1 || 1);
    }
  }

  for (const [num, count] of map) {
    if (count === nums.length) {
      result.push(num);
    }
  }

  result.sort((a, b) => a - b);

  return result;
};

module.exports = {
  intersection
};
