/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
  /*
   * O(m) Time | O(m) Space | O(1) Additional Space
   *  m = total cells in input array
   *  Algorithm scales linearly with input array size.
   */

  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = [];
  let rowMin = 0;
  let colMin = 0;
  let rowMax = rows - 1;
  let colMax = cols - 1;
  let row = 0;
  let col = 0;
  let direction = 'r';

  for (let i = 0; i < rows * cols; i++) {
    result.push(matrix[row][col]);
    moveNext();
  }

  return result;

  function moveNext() {
    switch (direction) {
      case 'r':
        if (col === colMax) {
          direction = 'd';
          row++;
          rowMin++;
        } else {
          col++;
        }
        break;
      case 'd':
        if (row === rowMax) {
          direction = 'l';
          col--;
          colMax--;
        } else {
          row++;
        }
        break;
      case 'l':
        if (col === colMin) {
          direction = 'u';
          row--;
          rowMax--;
        } else {
          col--;
        }
        break;
      case 'u':
        if (row === rowMin) {
          direction = 'r';
          col++;
          colMin++;
        } else {
          row--;
        }
        break;
    }
  }
};

module.exports = {
  spiralOrder
};
