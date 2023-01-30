/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
// O(n) Time | O(n) Space
//  n = max of input string lengths
//  Algorithm scales linearly with input string lengths.

  const tail = {value: null, next: null};
  const head = {value: null, next: tail, length: 0};

  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  while (i >= 0 && j >= 0) {
    binAdd(a[i], b[j]);
    i--;
    j--;
  }
  while (i >= 0) {
    binAdd(a[i], '0');
    i--;
  }
  while (j >= 0) {
    binAdd('0', b[j]);
    j--;
  }

  if (carry > 0) {
    unshiftValue(carry);
  }

  const result = new Array(head.length);
  for (let i = 0, listIt = head.next; i < head.length; i++, listIt = listIt.next) {
    result[i] = listIt.value;
  }

  return result.join('');

  function binAdd(a, b) {
    const aBit = parseInt(a, 2);
    const bBit = parseInt(b, 2);
    const xor = aBit ^ bBit ^ carry;
    carry = a & b | a & carry | b & carry;

    unshiftValue(xor);
  }

  function unshiftValue(value) {
    head.next = {value, next: head.next};
    head.length++;
  }
};

module.exports = {
  addBinary
};
