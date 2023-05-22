/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
// O(n) Time | O(n) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  const set = new Set();

  for (const num of nums) {

    // check frequency constraint
    if (set.has(num)) {
      return true;
    }

    // update frequency
    set.add(num);
  }

  return false;
};

module.exports = {
  containsDuplicate
};
