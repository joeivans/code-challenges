const {deleteNodes} = require('../index');
const {toList} = require('../../../test-utilities/linked-lists');

describe('Delete N Nodes After M Nodes of a Linked List', function () {
  it(`([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 2, 3) => [1, 2, 6, 7, 11, 12]`, function () {
    const result = deleteNodes(toList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), 2, 3);
    expect(result).toEqual(toList([1, 2, 6, 7, 11, 12]));
  });

  it(`([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1, 3) => [1, 5, 9]`, function () {
    const result = deleteNodes(toList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 1, 3);
    expect(result).toEqual(toList([1, 5, 9]));
  });
});
