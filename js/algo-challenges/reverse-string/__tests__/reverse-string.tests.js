const {reverseString} = require('../index');

describe('Reverse String', function () {

  it(`['h','e','l','l','o'] => ['o','l','l','e','h']`, function () {
    const inputArray = ['h', 'e', 'l', 'l', 'o'];
    const result = reverseString(inputArray);
    expect(result).toEqual(undefined);
    expect(inputArray).toEqual(['o', 'l', 'l', 'e', 'h']);
  });

  it(`['H','a','n','n','a','h'] => ['h','a','n','n','a','H']`, function () {
    const inputArray = ['H', 'a', 'n', 'n', 'a', 'h'];
    const result = reverseString(inputArray);
    expect(result).toEqual(undefined);
    expect(inputArray).toEqual(['h', 'a', 'n', 'n', 'a', 'H']);
  });

  it(`['0'] => ['0']`, function () {
    const inputArray = ['0'];
    const result = reverseString(inputArray);
    expect(result).toEqual(undefined);
    expect(inputArray).toEqual(['0']);
  });

});
