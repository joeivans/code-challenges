const {getAverages} = require('../index');

describe('K Radius Subarray Averages', function () {

  it(`([7,4,3,9,1,8,5,2,6], 3) => [-1,-1,-1,5,4,4,-1,-1,-1]`, function () {
    const result = getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3);
    expect(result).toEqual([-1, -1, -1, 5, 4, 4, -1, -1, -1]);
  });

  it(`([100000], 0) => [100000]`, function () {
    const result = getAverages([100000], 0);
    expect(result).toEqual([100000]);
  });

  it(`([8], 100000) => [-1]`, function () {
    const result = getAverages([8], 100000);
    expect(result).toEqual([-1]);
  });

});
