/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = function (nums) {
// O(n) Time | O(n) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  let sum = 0;
  const uniqueNums = new Set();
  const duplicateNums = new Set();

  for (const num of nums) {
    if (uniqueNums.has(num)) {
      duplicateNums.add(num);
    } else {
      sum += num;
      uniqueNums.add(num);
    }
  }

  for (const num of duplicateNums.keys()) {
    sum -= num;
  }

  return sum;
};

module.exports = {
  sumOfUnique
};
