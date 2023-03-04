/**
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = function (paths) {
// O(n) Time | O(n) Space
//  n = all paths
//  Algorithm scales linearly with input array size.

  const inCities = new Set();
  const outCities = new Set();

  for (const [inCity, outCity] of paths) {
    inCities.add(inCity);
    outCities.add(outCity);
  }

  for (const outCity of outCities.keys()) {
    if (!inCities.has(outCity)) {
      return outCity;
    }
  }

  throw new Error('Destination city not found.');
};

module.exports = {
  destCity
};
