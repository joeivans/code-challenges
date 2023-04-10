const {deleteDuplicates} = require('../index');
const {toList} = require('../../../test-utilities/linked-lists');

describe('Delete Duplicates from Sorted List', function () {
  it(`[1, 1, 2] => [1, 2]`, function () {
    const result = deleteDuplicates(toList([1, 1, 2]));
    expect(result).toEqual(toList([1, 2]));
  });

  it(`[1, 1, 2, 3, 3] => [1, 2, 3]`, function () {
    const result = deleteDuplicates(toList([1, 1, 2, 3, 3]));
    expect(result).toEqual(toList([1, 2, 3]));
  });
});
