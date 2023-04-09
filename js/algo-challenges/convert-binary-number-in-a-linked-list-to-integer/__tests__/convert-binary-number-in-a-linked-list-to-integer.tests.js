const {getDecimalValue} = require('../index');
const {toList} = require('../../../test-utilities/linked-lists/index');

describe('Convert Binary Number in a Linked List to Integer', function () {
  it(`[1, 0, 1] => 5`, function () {
    const result = getDecimalValue(toList([1, 0, 1]));
    expect(result).toEqual(5);
  });

  it(`[0] => 0`, function () {
    const result = getDecimalValue(toList([0]));
    expect(result).toEqual(0);
  });
});
