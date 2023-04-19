const {addTwoNumbers} = require('../index');
const {toList} = require('../../../test-utilities/linked-lists');

describe('Add Two Numbers', function () {
  it(`([2, 4, 3], [5, 6, 4]) => [7, 0, 8]`, function () {
    const result = addTwoNumbers(toList([2, 4, 3]), toList([5, 6, 4]));
    expect(result).toEqual(toList([7, 0, 8]));
  });

  it(`([0], [0]) => [0]`, function () {
    const result = addTwoNumbers(toList([0]), toList([0]));
    expect(result).toEqual(toList([0]));
  });

  it(`([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]) => [8, 9, 9, 9, 0, 0, 0, 1]`, function () {
    const result = addTwoNumbers(toList([9, 9, 9, 9, 9, 9, 9]), toList([9, 9, 9, 9]));
    expect(result).toEqual(toList([8, 9, 9, 9, 0, 0, 0, 1]));
  });
});
