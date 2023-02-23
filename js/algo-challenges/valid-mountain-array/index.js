/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = function (arr) {
// O(n) Time | O(1) Space
//  n = arr.length
//  Algorithm scales linearly with input array size.

  let i = 0;

  // walk up to peak
  while (i < arr.length - 1 && arr[i] < arr[i + 1]) {
    i++;
  }

  // peak too early or late
  if (i === 0 || i === arr.length - 1) {
    return false;
  }

  // walk down from peak
  while (i < arr.length - 1 && arr[i] > arr[i + 1]) {
    i++;
  }

  // made it back down
  return i === arr.length - 1;
};

module.exports = {
  validMountainArray
};
