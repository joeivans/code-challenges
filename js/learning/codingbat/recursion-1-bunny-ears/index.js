const NUM_OF_EARS = 2;

const bunnyEars = function (bunnies) {
  // O(n) Time | O(n) Space
  //  n = bunnies
  //  Algorithm scales linearly with input value.

  // base case
  if (bunnies < 1) {
    return 0;
  }

  // recursive case
  return NUM_OF_EARS + bunnyEars(bunnies - 1);
};

module.exports = {
  bunnyEars
};
