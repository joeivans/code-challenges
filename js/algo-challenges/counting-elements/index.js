/**
 * @param {number[]} arr
 * @return {number}
 */
const countElements = function (arr) {
// O(n) Time | O(n) Space
//  n = arr.length
//  Algorithm scales linearly with input array size.

  let result = 0;
  const set = new Set(arr);

  for (const num of arr) {
    if (set.has(num + 1)) {
      result++;
    }
  }

  return result;
};

module.exports = {
  countElements
};
