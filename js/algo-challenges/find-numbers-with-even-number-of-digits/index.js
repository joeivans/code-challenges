/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function (nums) {
// O(n) Time | O(1) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  let count = 0;

  for (let num of nums) {
    let digits = 0;

    while (num >= 1) {
      digits++;
      num /= 10;
    }

    if (digits % 2 === 0) {
      count++;
    }
  }

  return count;
};

module.exports = {
  findNumbers
};
