/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function (gain) {
// O(n) Time | O(1) Space
//  n = gain.length
//  Algorithm scales linearly with input array size.

  let highestPoint = 0;
  let altitudeSum = 0;

  for (const point of gain) {
    altitudeSum += point;

    if (altitudeSum > highestPoint) {
      highestPoint = altitudeSum;
    }
  }

  return highestPoint;
};

module.exports = {
  largestAltitude
};
