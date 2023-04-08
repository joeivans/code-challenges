const {deleteDuplicates} = require('../index');

const toList = function (arr) {
  if (!arr || arr.length === 0) {
    return null;
  }

  const head = {
    val: arr[0],
    next: null
  };

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
