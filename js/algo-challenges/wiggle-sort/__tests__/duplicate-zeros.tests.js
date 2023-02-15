const {wiggleSort} = require('../index');

describe('Wiggle Sort', function () {
  it(`[3, 5, 2, 1, 6, 4] => [3, 5, 1, 6, 2, 4]`, function () {
    const input = [3, 5, 2, 1, 6, 4];
    wiggleSort(input);
    expect(input).toEqual([3, 5, 1, 6, 2, 4]);
  });

  it(`[6, 6, 5, 6, 3, 8] => [6, 6, 5, 6, 3, 8]`, function () {
    const input = [6, 6, 5, 6, 3, 8];
    wiggleSort(input);
    expect(input).toEqual([6, 6, 5, 6, 3, 8]);
  });
});
