/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = function (arr) {
// O(n^2) Time | O(n) Space
//  n = arr.length
//  Algorithm scales quadratically with input array size.

  const prefix = new Array(arr.length);
  prefix[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  let cumulativeSum = 0;
  const windowLengthMultiplier = 2;
  for (let l = 0, r = 0; r < arr.length; r += windowLengthMultiplier) {
    for (let windowL = l, windowR = r; windowR < arr.length; windowL++, windowR++) {
      cumulativeSum += prefix[windowR] - prefix[windowL] + arr[windowL];
    }
  }

  return cumulativeSum;
};

module.exports = {
  sumOddLengthSubarrays
};
