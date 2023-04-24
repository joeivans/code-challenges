const {removeDuplicates} = require('../index');

describe('Remove All Adjacent Duplicates In String', function () {
  it(`'abbaca' => 'ca'`, function () {
    const result = removeDuplicates('abbaca');
    expect(result).toEqual('ca');
  });

  it(`'azxxzy' => 'ay'`, function () {
    const result = removeDuplicates('azxxzy');
    expect(result).toEqual('ay');
  });

  it(`'abccba' => ''`, function () {
    const result = removeDuplicates('abccba');
    expect(result).toEqual('');
  });
});
