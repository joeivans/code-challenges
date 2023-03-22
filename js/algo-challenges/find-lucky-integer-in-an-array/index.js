/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = function (arr) {
// O(n) Time | O(n) Space
//  n = arr.length
//  Algorithm scales linearly with input array size.

  let maxLuckyInteger = -1;
  const map = new Map();

  for (const num of arr) {
    map.set(
      num,
      map.get(num) + 1 || 1);
  }

  for (const [key, value] of map) {
    if (key === value && key > maxLuckyInteger) {
      maxLuckyInteger = key;
    }
  }

  return maxLuckyInteger;
};

module.exports = {
  findLucky
};
