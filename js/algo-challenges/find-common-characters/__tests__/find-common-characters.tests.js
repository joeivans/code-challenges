const {commonChars} = require('../index');

describe('Find Common Characters', function () {
  it(`['bella', 'label', 'roller'] => ['e', 'l', 'l']`, function () {
    const result = commonChars(['bella', 'label', 'roller']);
    expect(result).toEqual(['e', 'l', 'l']);
  });

  it(`['cool', 'lock', 'cook'] => ['c', 'o']`, function () {
    const result = commonChars(['cool', 'lock', 'cook']);
    expect(result).toEqual(['c', 'o']);
  });
});
