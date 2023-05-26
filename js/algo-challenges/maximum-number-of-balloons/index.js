/**
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = function (text) {
// O(n) Time | O(1) Space
//  n = text.length
//  Algorithm scales linearly with input string size.

  const frequencyMap = new Map();

  for (const c of text) {
    if (targetFrequencies.has(c)) {
      frequencyMap.set(
        c,
        frequencyMap.get(c) + 1 || 1
      );
    }
  }

  let answer;
  for (const [char, frequency] of targetFrequencies) {

    if (frequencyMap.get(char) === undefined) {
      return 0;
    }

    const requiredFrequency = Math.trunc(frequencyMap.get(char) / frequency);

    if (answer === undefined) {
      answer = requiredFrequency;
    } else {
      answer = Math.min(answer, requiredFrequency);
    }
  }

  return answer === undefined
    ? 0
    : answer;
};

const targetFrequencies = new Map([
  ['b', 1],
  ['a', 1],
  ['l', 2],
  ['o', 2],
  ['n', 1]
]);

module.exports = {
  maxNumberOfBalloons
};
