class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    // O(1) Time | O(n) Space
    //  n = capacity value

    this.capacity = capacity;
    this.cache = new Map();
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    // O(1) Time Average | O(n) Time Worst | O(1) Space

    if (this.cache.get(key) === undefined) {
      return -1;
    }

    const value = this.cache.get(key);
    this.put(key, value);
    return value;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    // O(1) Time Average | O(n) Time Worst | O(1) Space

    if (this.cache.get(key) !== undefined) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const expiredKey = this.cache.keys().next().value;
      this.cache.delete(expiredKey);
    }

    this.cache.set(key, value);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

module.exports = {
  LRUCache
};
