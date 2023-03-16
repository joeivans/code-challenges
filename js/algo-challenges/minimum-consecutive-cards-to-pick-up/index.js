/**
 * @param {number[]} cards
 * @return {number}
 */
const minimumCardPickup = function (cards) {
// O(n) Time | O(n) Space
//  n = cards.length
//  Algorithm scales linearly with input array size.
//
// NOTE:
//  I did not use a more elegant pattern on this because I wanted to
//  try it by hand first in this attempt. This is a basic sliding window
//  with an exact constraint but not using that specific map pattern.

  let minWindowSize = -1;
  const windowMap = new Map();
  let pairsCount = 0;

  for (let l = 0, r = 0; r < cards.length; r++) {
    // grow window
    windowMap.set(
      cards[r],
      windowMap.get(cards[r]) + 1 || 1);

    if (windowMap.get(cards[r]) > 1) {
      pairsCount++;
      if (r - l + 1 < minWindowSize || minWindowSize === -1) {
        minWindowSize = r - l + 1;
      }
    }

    // shrink window
    while (pairsCount > 0 && l <= r) {
      if (windowMap.get(cards[l]) > 1) {
        pairsCount--;
        // don't forget to update the minWindowSize
        if (r - l + 1 < minWindowSize) {
          minWindowSize = r - l + 1;
        }
      }

      windowMap.set(
        cards[l],
        windowMap.get(cards[l]) - 1);

      if (windowMap.get(cards[l]) === 0) {
        windowMap.delete(cards[l]);
      }

      l++;
    }
  }

  return minWindowSize;
};

module.exports = {
  minimumCardPickup
};
