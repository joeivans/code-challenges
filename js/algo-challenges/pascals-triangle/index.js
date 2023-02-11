/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  /*
   * O(n^2) Time | O(n^2) Space | O(1) Space Additional
   *  n = numRows
   *  Algorithm scales quadratically with input value.
   */

  const result = [];

  if (numRows > 0) {
    result.push([1]);
  }
  if (numRows > 1) {
    result.push([1, 1]);
  }

  for (let i = 2; i < numRows; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      row.push(calcPascalNumber(i, j));
    }
    result.push(row);
  }

  return result;

  function calcPascalNumber(row, col) {
    const isFirstColumn = col === 0;
    const isLastColumn = col === result[row - 1].length;

    if (isFirstColumn || isLastColumn) {
      return 1;
    }

    return result[row - 1][col - 1] + result[row - 1][col];
  }
};

module.exports = {
  generate
};
