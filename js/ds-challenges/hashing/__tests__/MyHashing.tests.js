const MyHashing = require('../MyHashing');

describe('MyHashing', function () {
  it('should hash any value to 0 when capacity is 0', function () {
    const strResult = MyHashing.getHash('Hello', 0);
    expect(strResult).toBe(0);

    const intResult = MyHashing.getHash(23, 0);
    expect(intResult).toBe(0);
  });

  it('should hash `a` to 97 when capacity is 100', function () {
    const charResult = MyHashing.getHash('a', 100);
    expect(charResult).toBe(97);
  });

  it('should hash `a` to 47 when capacity is 50', function () {
    const charResult = MyHashing.getHash('a', 50);
    expect(charResult).toBe(47);
  });

  it('should hash `abc` to 294 when capacity is 300', function () {
    const strResult = MyHashing.getHash('abc', 300);
    expect(strResult).toBe(294);
  });
});
