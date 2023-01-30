const {addBinary} = require('../index');

describe('Add Binary', function () {
  it(`('11', '1') => '100'`, function () {
    const result = addBinary('11', '1');
    expect(result).toEqual('100');
  });

  it(`('1010', '1011') => '10101'`, function () {
    const result = addBinary('1010', '1011');
    expect(result).toEqual('10101');
  });

  it(`('111', '111') => '1110'`, function () {
    const result = addBinary('111', '111');
    expect(result).toEqual('1110');
  });

  it(`('1110', '111') => '10101'`, function () {
    const result = addBinary('1110', '111');
    expect(result).toEqual('10101');
  });

  it(`('0', '11') => '11'`, function () {
    const result = addBinary('0', '11');
    expect(result).toEqual('11');
  });

  it(`('0', '0') => '11'`, function () {
    const result = addBinary('0', '0');
    expect(result).toEqual('0');
  });

  it(`('1', '1') => '10'`, function () {
    const result = addBinary('1', '1');
    expect(result).toEqual('10');
  });
});
