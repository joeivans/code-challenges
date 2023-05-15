const {count7} = require('../index');

describe('Recursion-1 Count7', function () {

  it(`7 => 1`, function () {
    const result = count7(7);
    expect(result).toEqual(1);
  });

  it(`77 => 2`, function () {
    const result = count7(77);
    expect(result).toEqual(2);
  });

  it(`123 => 0`, function () {
    const result = count7(123);
    expect(result).toEqual(0);
  });

  it(`717 => 2`, function () {
    const result = count7(717);
    expect(result).toEqual(2);
  });

  it(`7123 => 1`, function () {
    const result = count7(7123);
    expect(result).toEqual(1);
  });

  it(`47571 => 2`, function () {
    const result = count7(47571);
    expect(result).toEqual(2);
  });

  it(`99999 => 0`, function () {
    const result = count7(99999);
    expect(result).toEqual(0);
  });

  it(`99799 => 1`, function () {
    const result = count7(99799);
    expect(result).toEqual(1);
  });

  it(`771237 => 3`, function () {
    const result = count7(771237);
    expect(result).toEqual(3);
  });

  it(`771737 => 4`, function () {
    const result = count7(771737);
    expect(result).toEqual(4);
  });

  it(`777777 => 6`, function () {
    const result = count7(777777);
    expect(result).toEqual(6);
  });

  it(`70701277 => 4`, function () {
    const result = count7(70701277);
    expect(result).toEqual(4);
  });

  it(`777576197 => 5`, function () {
    const result = count7(777576197);
    expect(result).toEqual(5);
  });

});
