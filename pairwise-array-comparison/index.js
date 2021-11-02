'use strict';

class Private {
  static visitPairwiseArray(pairwiseArray, callback) {
    for (let i = 0; i < pairwiseArray.length - 1; i++) {
      callback(pairwiseArray[i], pairwiseArray[i + 1]);
    }
  }
}

class PairwiseDelta {
  getSumDelta(pairwiseArray) {
    let sum = 0;

    Private.visitPairwiseArray(pairwiseArray, (a, b) => {
      sum += Math.abs(a - b);
    });

    return sum;
  }

  getMaxDelta(pairwiseArray) {
    let maxDelta;

    Private.visitPairwiseArray(pairwiseArray, (a, b) => {

      let delta = Math.abs(a - b);

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
  PairwiseDelta
};