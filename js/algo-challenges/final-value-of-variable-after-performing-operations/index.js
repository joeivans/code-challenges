'use strict';

/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = function (operations) {
// O(n) Time | O(1) Space
//  n = operations.length
//  Algorithm scales linearly with input array size.

  let answer = 0;

  const commands = new Map();
  commands.set('--X', answer => answer -= 1);
  commands.set('X--', answer => answer -= 1);
  commands.set('++X', answer => answer += 1);
  commands.set('X++', answer => answer += 1);

  for (const operation of operations) {
    const command = commands.get(operation);

    if (command === undefined) {
      throw `'${operation}' is not supported.`;
    }

    answer = command(answer);
  }

  return answer;
};

module.exports = {
  finalValueAfterOperations
};
