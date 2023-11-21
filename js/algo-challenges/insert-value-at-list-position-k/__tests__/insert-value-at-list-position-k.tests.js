const {insertAt} = require('../index');
const {toList} = require('../../../test-utilities/linked-lists');

describe('Insert Value at List Position K', function () {

  it(`(['a','b','c'], 'q', 2)`, function () {
    const result = insertAt(toList(['a','b','c']), 'q', 2);
    expect(result).toEqual(toList(['a','b','q','c']));
  });

  it(`(['a'], 'q', 0)`, function () {
    const result = insertAt(toList(['a']), 'q', 0);
    expect(result).toEqual(toList(['q','a']));
  });

  it(`(['a'], 'q', 1)`, function () {
    const result = insertAt(toList(['a']), 'q', 1);
    expect(result).toEqual(toList(['a','q']));
  });

  it(`(null, 'q', 1)`, function () {
    const result = insertAt(toList(null), 'q', 1);
    expect(result).toEqual(toList(['q']));
  });

});
