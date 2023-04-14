const {removeElements} = require('../index');
const {toList} = require('../../../test-utilities/linked-lists');

describe('Remove Linked List Elements', function () {
  it(`([1, 2, 6, 3, 4, 5, 6], 6) => [1, 2, 3, 4, 5]`, function () {
    const result = removeElements(toList([1, 2, 6, 3, 4, 5, 6]), 6);
    expect(result).toEqual(toList([1, 2, 3, 4, 5]));
  });

  it(`([], 1) => []`, function () {
    const result = removeElements(toList([]), 1);
    expect(result).toEqual(toList([]));
  });

  it(`([7, 7, 7, 7], 7) => []`, function () {
    const result = removeElements(toList([7, 7, 7, 7]), 7);
    expect(result).toEqual(toList([]));
  });
});
