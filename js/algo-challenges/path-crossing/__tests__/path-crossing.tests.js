const {isPathCrossing} = require('../index');

describe('Path Crossing', function () {
  it(`'NES' => false`, function () {
    const result = isPathCrossing('NES');
    expect(result).toEqual(false);
  });

  it(`'NESWW' => true`, function () {
    const result = isPathCrossing('NESWW');
    expect(result).toEqual(true);
  });
});
