class Private {
  static visitPairwiseArray(pairwiseArray, callback) {
    for (let i = 0; i < pairwiseArray.length - 1; i++) {
      callback(pairwiseArray[i], pairwiseArray[i + 1]);
    }
  }
}

/**
 * Performs operations on pairwise arrays.
 */
class PairwiseDelta {
  /**
   * Returns the sum of deltas between array element pairs.
   * @param pairwiseArray
   * @returns {number}
   */
  getSumDelta(pairwiseArray) {
    let sum = 0;

    Private.visitPairwiseArray(pairwiseArray, (a, b) => {
      sum += Math.abs(a - b);
    });

    return sum;
  }

  /**
   * Returns the max delta between array element pairs.
   * @param pairwiseArray
   * @returns {number}
   */
  getMaxDelta(pairwiseArray) {
    let maxDelta;

    Private.visitPairwiseArray(pairwiseArray, (a, b) => {
      const delta = Math.abs(a - b);

      if (!maxDelta) {
        maxDelta = delta;
      }

      if (delta > maxDelta) {
        maxDelta = delta;
      }
    });

    return maxDelta;
  }
}

module.exports = {
  PairwiseDelta,
};
