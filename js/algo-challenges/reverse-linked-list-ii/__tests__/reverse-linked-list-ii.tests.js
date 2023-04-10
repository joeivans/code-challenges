const {reverseBetween} = require('../index');
const {toList} = require('../../../test-utilities/linked-lists');

describe('Reverse Linked List II', function () {
  it(`([1, 2, 3, 4, 5]), 2, 4) => [1, 4, 3, 2, 5]`, function () {
    const result = reverseBetween(toList([1, 2, 3, 4, 5]), 2, 4);
    expect(result).toEqual(toList([1, 4, 3, 2, 5]));
  });

  it(`([5]), 1, 1) => [5]`, function () {
    const result = reverseBetween(toList([5]), 1, 1);
    expect(result).toEqual(toList([5]));
  });

  it(`([1, 2, 3, 4, 5]), 1, 5) => [5, 4, 3, 2, 1]`, function () {
    const result = reverseBetween(toList([1, 2, 3, 4, 5]), 1, 5);
    expect(result).toEqual(toList([5, 4, 3, 2, 1]));
  });
});
