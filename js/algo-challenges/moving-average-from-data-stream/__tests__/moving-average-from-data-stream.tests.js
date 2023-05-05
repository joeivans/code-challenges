const {MovingAverage} = require('../index');

describe('Moving Average from Data Stream', function () {
  it(`ctor, next{1,10,3,5}=>{1,5.5,4.67,6}`, function () {
    const m = new MovingAverage(3);
    expect(m.next(1)).toEqual(1);
    expect(m.next(10)).toEqual(5.5);
    expect(+m.next(3).toFixed(2)).toEqual(4.67);
    expect(m.next(5)).toEqual(6);
  });
});
