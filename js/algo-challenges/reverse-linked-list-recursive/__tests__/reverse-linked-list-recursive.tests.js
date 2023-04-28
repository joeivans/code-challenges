const {reverseList} = require('../index');
const {toList} = require('../../../test-utilities/linked-lists');

describe('Reverse Linked List - Recursive', function () {
  it(`[1, 2, 3, 4, 5] => [5, 4, 3, 2, 1]`, function () {
    const result = reverseList(toList([1, 2, 3, 4, 5]));
    expect(result).toEqual(toList([5, 4, 3, 2, 1]));
  });

  it(`[1, 2] => [2, 1]`, function () {
    const result = reverseList(toList([1, 2]));
    expect(result).toEqual(toList([2, 1]));
  });

  it(`[] => []`, function () {
    const result = reverseList(toList([]));
    expect(result).toEqual(toList([]));
  });
});
