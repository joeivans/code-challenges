const {isValid} = require('../index');

describe('Valid Parentheses', function () {
  it(`'()' => true`, function () {
    const result = isValid('()');
    expect(result).toEqual(true);
  });

  it(`'()[]{}' => true`, function () {
    const result = isValid('()[]{}');
    expect(result).toEqual(true);
  });

  it(`'(]' => false`, function () {
    const result = isValid('(]');
    expect(result).toEqual(false);
  });

  it(`'([{}])' => true`, function () {
    const result = isValid('([{}])');
    expect(result).toEqual(true);
  });
});
