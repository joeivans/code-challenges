/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function (address) {
// O(n + m) Time | O(m) Space
//  n = input string length
//  m = result string length
//  Algorithm scales linearly with input string size.

  const substitutions = new Map([
    ['.', '[.]'],
  ]);

  const result = new Array(address.length);

  for (let i = 0; i < address.length; i++) {
    const char = address[i];
    result[i] = substitutions.get(char) ?? char;
  }

  return result.join('');
};

module.exports = {
  defangIPaddr
};
