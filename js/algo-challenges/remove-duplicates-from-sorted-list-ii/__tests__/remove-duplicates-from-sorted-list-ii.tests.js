const {deleteDuplicates} = require('../index');

const toList = function (arr) {
  if (!arr || arr.length === 0) {
    return null;
  }

  const head = {val: arr[0], next: null};

  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    const newNode = {
      val: arr[i],
      next: null
    };

    curr.next = newNode;
    curr = curr.next;
  }

  return head;
};

describe('Remove Duplicates from Sorted List II', function () {
  it(`[1, 2, 3, 3, 4, 4, 5] => [1, 2, 5]`, function () {
    const result = deleteDuplicates(toList([1, 2, 3, 3, 4, 4, 5]));
    expect(result).toEqual(toList([1, 2, 5]));
  });

  it(`[1, 1, 1, 2, 3] => [2, 3]`, function () {
    const result = deleteDuplicates(toList([1, 1, 1, 2, 3]));
    expect(result).toEqual(toList([2, 3]));
  });

  it(`[1, 1, 1] => []`, function () {
    const result = deleteDuplicates(toList([1, 1, 1]));
    expect(result).toEqual(toList([]));
  });
});
