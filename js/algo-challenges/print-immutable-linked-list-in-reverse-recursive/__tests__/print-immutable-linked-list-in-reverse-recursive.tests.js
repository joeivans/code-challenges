const {printLinkedListInReverse} = require('../index');
const {toImmutableList} = require('../../../test-utilities/linked-lists');

describe('Print Immutable Linked List In Reverse - Recursive', function () {
  it(`[1, 2, 3, 4] => "4/n3/n2/n1/n"`, function () {
    let strOut = '';
    const list = toImmutableList([1, 2, 3, 4], (s) => strOut += s);
    printLinkedListInReverse(list);
    expect(strOut).toEqual('4/n3/n2/n1/n');
  });

  it(`[0, -4, -1, 3, -5] => "-5/n3/n-1/n-4/n0/n"`, function () {
    let strOut = '';
    const list = toImmutableList([0, -4, -1, 3, -5], (s) => strOut += s);
    printLinkedListInReverse(list);
    expect(strOut).toEqual('-5/n3/n-1/n-4/n0/n');
  });

  it(`[-2, 0, 6, 4, 4, -6] => "-6/n4/n4/n6/n0/n-2/n"`, function () {
    let strOut = '';
    const list = toImmutableList([-2, 0, 6, 4, 4, -6], (s) => strOut += s);
    printLinkedListInReverse(list);
    expect(strOut).toEqual('-6/n4/n4/n6/n0/n-2/n');
  });
});
