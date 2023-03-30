class OrderedStream {
  /**
   * @param {number} n
   */
  constructor(n) {
    // O(n) Time | O(n) Space
    //  n = integer value of n
    //  Algorithm scales linearly with input integer value.

    this.nextId = 0;
    this.backingArray = new Array(n);
  }

  /**
   * @param {number} idKey
   * @param {string} value
   * @return {string[]}
   */
  insert(idKey, value) {
    // O(n) Time | O(n) Space
    //  n = this.backingArray.length
    //  Algorithm scales linearly with backingArray size.

    const result = [];
    let id = idKey - 1;

    this.backingArray[id] = value;

    if (id === this.nextId) {
      while (id < this.backingArray.length && this.backingArray[id] !== undefined) {
        result.push(this.backingArray[id]);
        id++;
      }

      this.nextId = id;
    }

    return result;
  }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

module.exports = {
  OrderedStream
};
