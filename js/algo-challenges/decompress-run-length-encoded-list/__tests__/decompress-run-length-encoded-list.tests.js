const {decompressRLEList} = require('../index');

describe('Decompress Run-Length Encoded List', function () {

  it(`[1, 2, 3, 4] => [2, 4, 4, 4]`, function () {
    const result = decompressRLEList([1, 2, 3, 4]);
    expect(result).toStrictEqual([2, 4, 4, 4]);
  });

  it(`[1, 1, 2, 3] => [1, 3, 3]`, function () {
    const result = decompressRLEList([1, 1, 2, 3]);
    expect(result).toStrictEqual([1, 3, 3]);
  });
});
