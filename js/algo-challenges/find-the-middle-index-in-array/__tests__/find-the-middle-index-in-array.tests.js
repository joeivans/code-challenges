const {findMiddleIndex} = require('../index');

describe('Find the Middle Index in Array', function () {
  it(`[2, 3, -1, 8, 4] => 3`, function () {
    const result = findMiddleIndex([2, 3, -1, 8, 4]);
    expect(result).toEqual(3);
  });

  it(`[1, -1, 4] => 2`, function () {
    const result = findMiddleIndex([1, -1, 4]);
    expect(result).toEqual(2);
  });

  it(`[2, 5] => -1`, function () {
    const result = findMiddleIndex([2, 5]);
    expect(result).toEqual(-1);
  });

  it(`[2, 0] => 0`, function () {
    const result = findMiddleIndex([2, 0]);
    expect(result).toEqual(0);
  });

  it(`[0, 2] => 1`, function () {
    const result = findMiddleIndex([0, 2]);
    expect(result).toEqual(1);
  });
});
