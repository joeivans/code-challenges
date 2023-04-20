const {detectCycle} = require('../index');
const {toList} = require('../../../test-utilities/linked-lists');

describe('Linked List Cycle II', function () {
  it(`[3, 2, 0, -4] => [2, 0, -4]`, function () {
    const list = toList([3, 2, 0, -4]);
    const cycleNode = list.next;
    const tail = cycleNode.next.next;
    tail.next = cycleNode;

    const result = detectCycle(list);
    expect(result).toEqual(cycleNode);
  });

  it(`[1, 2] => [1, 2]`, function () {
    const list = toList([1, 2]);
    const cycleNode = list;
    const tail = cycleNode.next;
    tail.next = cycleNode;

    const result = detectCycle(list);
    expect(result).toEqual(cycleNode);
  });

  it(`[1] => null`, function () {
    const list = toList([1]);

    const result = detectCycle(list);
    expect(result).toEqual(null);
  });

  it(`[0] => [0]`, function () {
    const list = toList([0]);
    const cycleNode = list;
    const tail = cycleNode;
    tail.next = cycleNode;

    const result = detectCycle(list);
    expect(result).toEqual(cycleNode);
  });

  it(`[0] => null`, function () {
    const list = toList([0]);

    const result = detectCycle(list);
    expect(result).toEqual(null);
  });
});
