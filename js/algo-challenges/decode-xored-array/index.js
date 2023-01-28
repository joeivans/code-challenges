/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = function (encoded, first) {
// O(n) Time | O(1) Additional Space
//  n = input array length
//  Algorithm scales linearly with input array size.

  const arr = new Array(encoded.length + 1);

  arr[0] = first;

  for (let i = 0; i < encoded.length; i++) {
    arr[i + 1] = encoded[i] ^ arr[i];
  }

  return arr;
};

module.exports = {
  decode
};
