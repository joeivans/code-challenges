const {RecentCounter} = require('../index');

describe('Number of Recent Calls', function () {
  it(`ctor(), ping(1,100,3001,3002) => 1,2,3,3`, function () {
    const sut = new RecentCounter();

    expect(sut.ping(1)).toEqual(1);
    expect(sut.ping(100)).toEqual(2);
    expect(sut.ping(3001)).toEqual(3);
    expect(sut.ping(3002)).toEqual(3);
  });
});
