/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = function (path) {
  /*
   * O(n) Time | O(n) Space
   *  n = number of chars in input string
   *  Algorithm scales linearly with input string size.
   */

  let x = 0;
  let y = 0;

  const visited = new Set();

  const movementActions = new Map([
    ['N', () => {
      y++;
    }],
    ['S', () => {
      y--;
    }],
    ['E', () => {
      x++;
    }],
    ['W', () => {
      x--;
    }]
  ]);

  visited.add(getKey());

  for (const movement of path) {
    movementActions.get(movement)();
    const key = getKey();
    if (visited.has(key)) {
      return true;
    }
    visited.add(key);
  }

  return false;

  function getKey() {
    return `(${x}),(${y})`;
  }
};

module.exports = {
  isPathCrossing
};
