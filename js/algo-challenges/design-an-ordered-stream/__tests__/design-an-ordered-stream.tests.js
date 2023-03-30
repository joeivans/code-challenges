const {OrderedStream} = require('../index');

describe('Design an Ordered Stream', function () {
  it(
    `ctor(5); insert(3,'ccccc'); insert(1,'aaaaa'); insert(2,'bbbbb'); insert(5,'eeeee'); insert(4,'ddddd')
    => ['aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'eeeee']`, function () {
      const os = new OrderedStream(5);
      expect(os.insert(3, 'ccccc')).toEqual([]);
      expect(os.insert(1, 'aaaaa')).toEqual(['aaaaa']);
      expect(os.insert(2, 'bbbbb')).toEqual(['bbbbb', 'ccccc']);
      expect(os.insert(5, 'eeeee')).toEqual([]);
      expect(os.insert(4, 'ddddd')).toEqual(['ddddd', 'eeeee']);
    });
});
