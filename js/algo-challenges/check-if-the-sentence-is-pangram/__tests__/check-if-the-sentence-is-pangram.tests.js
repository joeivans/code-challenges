const {checkIfPangram} = require('../index');

describe('Check if the Sentence Is Pangram', function () {

  it(`'thequickbrownfoxjumpsoverthelazydog' => true`, function () {
    const result = checkIfPangram('thequickbrownfoxjumpsoverthelazydog');
    expect(result).toEqual(true);
  });

  it(`'leetcode' => false`, function () {
    const result = checkIfPangram('leetcode');
    expect(result).toEqual(false);
  });

});
