const {replaceElements} = require('../index');

describe('Replace Elements with Greatest Element on Right Side', function () {
  it(`[17, 18, 5, 4, 6, 1] => [18, 6, 6, 6, 1, -1]`, function () {
    const result = replaceElements([17, 18, 5, 4, 6, 1]);
    expect(result).toEqual([18, 6, 6, 6, 1, -1]);
  });

  it(`[400] => [-1]`, function () {
    const result = replaceElements([400]);
    expect(result).toEqual([-1]);
  });
});
