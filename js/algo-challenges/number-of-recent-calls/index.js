class RecentCounter {
  static #UPPER_BOUND = 3000;

  constructor() {
    this.requestQueue = [];
  }

  /**
   * @param {number} t
   * @return {number}
   */
  ping(t) {
    const lowerBound = t - RecentCounter.#UPPER_BOUND;

    while (this.requestQueue.length > 0 && this.requestQueue[0] < lowerBound) {
      this.requestQueue.shift();
    }

    this.requestQueue.push(t);

    return this.requestQueue.length;
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

module.exports = {
  RecentCounter
};
