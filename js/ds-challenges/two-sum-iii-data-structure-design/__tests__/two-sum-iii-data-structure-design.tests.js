const TwoSum = require('../TwoSum');

describe('Two Sum III - Data Structure Design', function () {
  it('should construct new object', function () {
    const obj = new TwoSum();
    const obj2 = new TwoSum();

    !expect(obj).toEqual(obj2);
  });

  it('should add numbers to the data structure', function () {
    const obj = new TwoSum();

    obj.add(1);
    obj.add(2);
    obj.add(3);
    obj.add(1);
  });

  it('should find a matching pair if exists', function () {
    const obj = new TwoSum();

    obj.add(1);
    obj.add(2);
    obj.add(4);
    obj.add(4);

    expect(obj.find(3)).toEqual(true);
    expect(obj.find(6)).toEqual(true);
    expect(obj.find(8)).toEqual(true);
  });

  it('should not find a matching pair if not exists', function () {
    const obj = new TwoSum();

    obj.add(1);
    obj.add(2);
    obj.add(4);
    obj.add(4);

    expect(obj.find(1)).toEqual(false);
    expect(obj.find(9)).toEqual(false);
    expect(obj.find(10)).toEqual(false);
  });
});
