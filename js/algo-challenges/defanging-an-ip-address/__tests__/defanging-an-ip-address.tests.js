const {defangIPaddr} = require('../index');

describe('Defanging an IP Address', function () {

  test(`'1.1.1.1' => '1[.]1[.]1[.]1'`, function () {
    const result = defangIPaddr('1.1.1.1');
    expect(result).toStrictEqual('1[.]1[.]1[.]1');
  });

  test(`'255.100.50.0' => '255[.]100[.]50[.]0'`, function () {
    const result = defangIPaddr('255.100.50.0');
    expect(result).toStrictEqual('255[.]100[.]50[.]0');
  });
});
