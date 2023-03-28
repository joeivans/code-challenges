/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
// O(m + n) Time | O(m) Space
//  m = answer string length
//  n = number of input num place values

  const ans = [];

  const intToRomanMapIt = intToRomanMap.entries();

  while (num > 0) {
    const [currInt, currRoman] = intToRomanMapIt.next().value;

    while (num >= currInt) {
      ans.push(currRoman);
      num -= currInt;
    }
  }

  return ans.join('');
};

const intToRomanMap = new Map([
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']]);

module.exports = {
  intToRoman
};
