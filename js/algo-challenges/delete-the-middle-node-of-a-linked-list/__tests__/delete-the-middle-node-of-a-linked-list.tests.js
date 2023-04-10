const {deleteMiddle} = require('../index');
const {toList} = require('../../../test-utilities/linked-lists');

describe('Delete the Middle Node of a Linked List', function () {
  it(`[1, 3, 4, 7, 1, 2, 6] => [1, 3, 4, 1, 2, 6]`, function () {
    const result = deleteMiddle(toList([1, 3, 4, 7, 1, 2, 6]));
    expect(result).toEqual(toList([1, 3, 4, 1, 2, 6]));
  });

  it(`[1, 2, 3, 4] => [1, 2, 4]`, function () {
    const result = deleteMiddle(toList([1, 2, 3, 4]));
    expect(result).toEqual(toList([1, 2, 4]));
  });

  it(`[2, 1] => [2]`, function () {
    const result = deleteMiddle(toList([2, 1]));
    expect(result).toEqual(toList([2]));
  });

  it(`[2] => []`, function () {
    const result = deleteMiddle(toList([2]));
    expect(result).toEqual(toList([]));
  });

  it(`[3, 2, 1] => [3, 1]`, function () {
    const result = deleteMiddle(toList([3, 2, 1]));
    expect(result).toEqual(toList([3, 1]));
  });
});
