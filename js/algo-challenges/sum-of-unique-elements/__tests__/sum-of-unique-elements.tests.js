const {sumOfUnique} = require('../index');

describe('Sum of Unique Elements', function () {
  it(`[1, 2, 3, 2] => 4`, function () {
    const result = sumOfUnique([1, 2, 3, 2]);
    expect(result).toEqual(4);
  });

  it(`[1, 1, 1, 1, 1] => 0`, function () {
    const result = sumOfUnique([1, 1, 1, 1, 1]);
    expect(result).toEqual(0);
  });

  it(`[1, 2, 3, 4, 5] => 15`, function () {
    const result = sumOfUnique([1, 2, 3, 4, 5]);
    expect(result).toEqual(15);
  });

  it(`[1, 2, 3, 4, 5, 4, 3, 2, 1] => 5`, function () {
    const result = sumOfUnique([1, 2, 3, 4, 5, 4, 3, 2, 1]);
    expect(result).toEqual(5);
  });
});
