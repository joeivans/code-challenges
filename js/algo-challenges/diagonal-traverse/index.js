/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const findDiagonalOrder = function (mat) {
// O(m) Time | O(1) Space
//  m = number of cells in input array
//  Algorithm scales linearly with input array size.

  const rows = mat.length;
  const cols = mat[0].length;
  const rowMax = rows - 1;
  const colMax = cols - 1;
  const rowMin = 0;
  const colMin = 0;

  const result = [];
  let row = 0;
  let col = 0;
  let up = true;
  for (let i = 0; i < rows * cols; i++) {
    result.push(mat[row][col]);

    if (up) {
      if (col === colMax) {
        row++;
        up = !up;
      } else if (row === rowMin) {
        col++;
        up = !up;
      } else {
        row--;
        col++;
      }
    } else {
      if (row === rowMax) {
        col++;
        up = !up;
      } else if (col === colMin) {
        row++;
        up = !up;
      } else {
        row++;
        col--;
      }
    }
  }

  return result;
};

module.exports = {
  findDiagonalOrder
};
