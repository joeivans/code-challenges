/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function (s, t) {
// O(n) Time | O(n) Space
//  n = all chars in s + t
//  Algorithm scales linearly with input string sizes.

  const stackS = helper(s);
  const stackT = helper(t);

  if (stackS.length !== stackT.length) {
    return false;
  }

  for (let i = 0; i < stackS.length; i++) {
    if (stackS[i] !== stackT[i]) {
      return false;
    }
  }

  return true;
};

const helper = function (s) {
  const stack = [];

  for (const c of s) {
    if (c === '#') {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack;
};

module.exports = {
  backspaceCompare
};
