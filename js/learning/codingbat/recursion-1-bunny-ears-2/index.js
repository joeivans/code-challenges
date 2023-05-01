const NUM_OF_EARS_ODD = 2;
const NUM_OF_EARS_EVEN = 3;

const bunnyEars2 = function (bunnies) {
  // O(n) Time | O(n) Space
  //  n = bunnies
  //  Algorithm scales linearly with input value.

  // base case
  if (bunnies < 1) {
    return 0;
  }

  // recursive case
  if (bunnies % 2 === 0) {
    return NUM_OF_EARS_EVEN + bunnyEars2(bunnies - 1);
  }

  return NUM_OF_EARS_ODD + bunnyEars2(bunnies - 1);
};

module.exports = {
  bunnyEars2
};
