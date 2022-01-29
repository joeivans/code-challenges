'use strict';
const {search} = require('../index');
describe('Binary search tests', () => {
  it('should return index of found target', () => {
    expect(search([1, 2, 3, 4], 1))
      .toBe(0);
    expect(search([1, 2, 3, 4], 2))
      .toBe(1);
    expect(search([1, 2, 3, 4], 3))
      .toBe(2);
    expect(search([1, 2, 3, 4], 4))
      .toBe(3);
  });
  it('should return index -1 of not found target', () => {
    expect(search([1, 2, 3, 4], 0))
      .toBe(-1);
    expect(search([1, 2, 3, 4], 5))
      .toBe(-1);
    expect(search([0, 2, 3, 4], 1))
      .toBe(-1);
  });
});
