const triangle = function (rows) {
  // base case
  if (rows < 1) {
    return 0;
  }

  return rows + triangle(rows - 1);
};

module.exports = {
  triangle
};
