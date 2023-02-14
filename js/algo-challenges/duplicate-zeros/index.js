/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function (arr) {
// O(n) Time | O(1) Space
//  n = arr.length
//  Algorithm scales linearly with input array size.

  let zeroCount = 0;
  let len = arr.length - 1;
  for (let left = 0; left < len - zeroCount; left++) {
    if (arr[left] === 0) {
      zeroCount++;
    }
  }
  if (arr[len - zeroCount] === 0) {
    arr[len] = 0;
    len--;
  }

  const last = len - zeroCount;
  for (let i = last; i >= 0; i--) {
    arr[i + zeroCount] = arr[i];

    if (arr[i] === 0) {
      zeroCount--;
      arr[i + zeroCount] = 0;
    }
  }
};

module.exports = {
  duplicateZeros
};
