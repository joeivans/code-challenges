const {largestAltitude} = require('../index');

describe('Find the Highest Altitude', function () {
  it(`[-5, 1, 5, 0, -7] => 1`, function () {
    const result = largestAltitude([-5, 1, 5, 0, -7]);
    expect(result).toEqual(1);
  });

  it(`[-4, -3, -2, -1, 4, 3, 2] => 0`, function () {
    const result = largestAltitude([-4, -3, -2, -1, 4, 3, 2]);
    expect(result).toEqual(0);
  });

  it(`[0] => 0`, function () {
    const result = largestAltitude([0]);
    expect(result).toEqual(0);
  });
});
