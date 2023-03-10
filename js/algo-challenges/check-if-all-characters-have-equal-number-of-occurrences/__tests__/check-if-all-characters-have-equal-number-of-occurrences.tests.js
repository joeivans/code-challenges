const {areOccurrencesEqual} = require('../index');

describe('Check if All Characters Have Equal Number of Occurrences', function () {
  it(`'abacbc' => true`, function () {
    const result = areOccurrencesEqual('abacbc');
    expect(result).toEqual(true);
  });

  it(`'aaabb' => false`, function () {
    const result = areOccurrencesEqual('aaabb');
    expect(result).toEqual(false);
  });
});
