/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
// O(n) Time | O(n) Space
//  n = s.length
//  Algorithm scales linearly with input string size.

  const opStack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (openMap.get(s[i])) {
      opStack.push(s[i]);
    } else {
      const op = opStack.pop();
      if (openMap.get(op) !== s[i]) {
        return false;
      }
    }
  }

  return opStack.length === 0;
};

const openMap = new Map([
  ['(', ')'],
  ['[', ']'],
  ['{', '}'],
]);

module.exports = {
  isValid
};
