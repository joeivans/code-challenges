/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
// O(n) Time | O(n) Space
//  n = path.length
//  Algorithm scales linearly with input string size.

  const stack = [];

  for (const cd of path.split('/')) {
    switch (cd) {
      case '.':
      case '':
        break;
      case '..':
        stack.pop();
        break;
      default:
        stack.push(cd);
    }
  }

  const result = [];

  for (const cd of stack) {
    result.push(`/${cd}`);
  }

  return result.length > 0 ? result.join('') : '/';
};

module.exports = {
  simplifyPath
};
