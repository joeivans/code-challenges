/**
 * @param {number[]} nums
 * @return {number}
 */
const differenceOfSum = function (nums) {
// O(n) Time | O(1) Space
//  n = input array size
//  Algorithm scales linearly with input array size.

  let elementSum = 0;
  let digitSum = 0;

  for (let num of nums) {
    elementSum += num;

    while (num > 9) {
      const digit = num % 10;
      digitSum += digit;
      num = Math.trunc(num / 10);
    }

    digitSum += num;
  }

  return Math.abs(elementSum - digitSum);
};

module.exports = {
  differenceOfSum
};
