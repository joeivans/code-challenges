/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function(arr) {
// O(n) Time | O(1) Space
//  n = arr.length
//  Algorithm scales linearly with input array size.

  let maxVisited = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    const temp = arr[i];
    arr[i] = maxVisited;

    if (temp > maxVisited) {
      maxVisited = temp;
    }
  }

  return arr;
};

module.exports = {
  replaceElements
};
