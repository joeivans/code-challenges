const {removeNthFromEnd} = require('../index');

const toList = function (arr) {
  if (arr.length === 0) {
    return null;
  }

  const sentinel = {};

  let curr = sentinel;
  for (const val of arr) {
    const newNode = {
      val,
      next: null
    };

    curr.next = newNode;
    curr = curr.next;
  }

  return sentinel.next;
};

describe('Remove Nth Node From End of List', function () {
  it(`([1, 2, 3, 4, 5], 2) => [1, 2, 3, 5]`, function () {
    const result = removeNthFromEnd(toList([1, 2, 3, 4, 5]), 2);
    expect(result).toEqual(toList([1, 2, 3, 5]));
  });

  it(`[1] => []`, function () {
    const result = removeNthFromEnd(toList([1]), 1);
    expect(result).toEqual(toList([]));
  });

  it(`([1, 2], 1) => [1]`, function () {
    const result = removeNthFromEnd(toList([1, 2]), 1);
    expect(result).toEqual(toList([1]));
  });

  it(`([1, 2], 2) => [2]`, function () {
    const result = removeNthFromEnd(toList([1, 2]), 2);
    expect(result).toEqual(toList([2]));
  });

  it(`([1, 3, 5], 3) => [3, 5]`, function () {
    const result = removeNthFromEnd(toList([1, 3, 5]), 3);
    expect(result).toEqual(toList([3, 5]));
  });
});
