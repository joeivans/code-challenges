/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function (candies, extraCandies) {
// O(n) Time | O(1) Space
//  n = candies.length
//  Algorithm scales linearly with input array size.

  const result = new Array(candies.length);

  let maxCandyBeforeExtraCandies = 0;
  for (const candy of candies) {
    if (candy > maxCandyBeforeExtraCandies) {
      maxCandyBeforeExtraCandies = candy;
    }
  }

  for (let i = 0; i < candies.length; i++) {
    result[i] = candies[i] + extraCandies >= maxCandyBeforeExtraCandies;
  }

  return result;
};

module.exports = {
  kidsWithCandies
};
