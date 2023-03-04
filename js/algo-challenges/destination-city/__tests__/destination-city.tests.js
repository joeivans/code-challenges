const {destCity} = require('../index');

describe('Destination City', function () {
  it(
    `[['London', 'New York'], ['New York', 'Lima'], ['Lima', 'Sao Paulo']] => 'Sao Paulo'`,
    function () {
      const result = destCity([['London', 'New York'], ['New York', 'Lima'], ['Lima', 'Sao Paulo']]);
      expect(result).toEqual('Sao Paulo');
    });

  it(`[['B', 'C'], ['D', 'B'], ['C', 'A']] => 'A'`, function () {
    const result = destCity([['B', 'C'], ['D', 'B'], ['C', 'A']]);
    expect(result).toEqual('A');
  });

  it(`[['A', 'Z']] => 'Z'`, function () {
    const result = destCity([['A', 'Z']]);
    expect(result).toEqual('Z');
  });
});
