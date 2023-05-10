const {findMaxAverage} = require('../index');

describe('Maximum Average Subarray I', function () {
  it(`([1, 12, -5, -6, 50, 3], 4) => 12.75`, function () {
    const result = findMaxAverage([1, 12, -5, -6, 50, 3], 4);
    expect(result).toEqual(12.75);
  });

  it(`([5], 1) => 5`, function () {
    const result = findMaxAverage([5], 1);
    expect(result).toEqual(5);
  });
});
