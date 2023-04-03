const {customSortString} = require('../index');

describe('Custom Sort String', function () {
  it(`('cba', 'abcd') => 'cbad'`, function () {
    const result = customSortString('cba', 'abcd');
    expect(result).toEqual('cbad');
  });

  it(`('cbafg', 'abcd') => 'cbad'`, function () {
    const result = customSortString('cbafg', 'abcd');
    expect(result).toEqual('cbad');
  });

  it(`('cba', 'acbcdee') => 'ccbadee'`, function () {
    const result = customSortString('cba', 'acbcdee');
    expect(result).toEqual('ccbadee');
  });
});
