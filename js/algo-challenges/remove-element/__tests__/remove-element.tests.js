const {removeElement} = require('../index');

describe('Remove Element', function () {
  it(`([3, 2, 2, 3], 3) => 2 | [2,2,_,_]`, function () {
    const input = [3, 2, 2, 3];
    const result = removeElement(input, 3);
    expect(result).toEqual(2);
    expect(JSON.stringify(input).startsWith('[2,2,')).toEqual(true);
  });

  it(`([0, 1, 2, 2, 3, 0, 4, 2], 2) => 5 | [0,1,4,0,3,_,_,_]`, function () {
    const input = [0, 1, 2, 2, 3, 0, 4, 2];
    const result = removeElement(input, 2);
    expect(result).toEqual(5);
    expect(JSON.stringify(input).startsWith('[0,1,4,0,3,')).toEqual(true);
  });
});
