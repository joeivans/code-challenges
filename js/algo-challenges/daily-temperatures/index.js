/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
// O(n) Time | O(n) Space
//  n = temperatures.length
//  Algorithm scales linearly with input array size.

  // const answer = new Array(temperatures.length).fill(0);
  const answer = Array.from({length: temperatures.length}, () => 0);
  const indexStack = [];

  for (let i = 0; i < temperatures.length; i++) {

    if (indexStack.length > 0 ) {
      while (temperatures[i] > temperatures[indexStack[indexStack.length - 1]]) {
        const top = indexStack.pop();
        answer[top] = i - top;
      }
    }

    indexStack.push(i);
  }

  return answer;
};

module.exports = {
  dailyTemperatures
};
