/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
const customSortString = function (order, s) {
// O(m + n) Time | O(n) Space
//  m = order.length
//  n = s.length
//  Algorithm scales linearly with input string sizes.

  const result = [];
  const map = new Map();

  for (const c of s) {
    map.set(
      c,
      map.get(c) + 1 || 1);
  }

  for (const c of order) {
    for (let count = map.get(c); count > 0; count--) {
      result.push(c);
    }

    map.set(c, 0);
  }

  for (const c of s) {
    for (let count = map.get(c); count > 0; count--) {
      result.push(c);
    }

    map.set(c, 0);
  }

  return result.join('');
};

module.exports = {
  customSortString
};
