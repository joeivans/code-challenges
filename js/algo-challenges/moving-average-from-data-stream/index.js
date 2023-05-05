class MovingAverage {
  capacity;
  head;
  tail;
  sumOfValues;
  numOfValues;

  /**
   * @param {number} size
   */
  constructor(size) {
    this.capacity = size;

    this.head = {};
    this.tail = {};

    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.sumOfValues = 0;
    this.numOfValues = 0;
  }

  /**
   * Add val at end of queue, before tail.
   * @param {number} val
   */
  #enqueue(val){
    const newNode = {
      val,
      next: this.tail,
      prev: this.tail.prev
    };

    this.tail.prev.next = newNode;
    this.tail.prev = newNode;
    this.numOfValues++;
  }

  /**
   * Remove and return value at front of queue, after head.
   * @returns {number}
   */
  #dequeue() {
    const front = this.head.next;

    front.next.prev = this.head;
    this.head.next = front.next;
    this.numOfValues--;

    return front.val;
  }

  /**
   * @param {number} val
   * @return {number}
   */
  next(val) {
    if (this.numOfValues >= this.capacity) {
      const front = this.#dequeue();

      this.sumOfValues -= front;
    }

    this.#enqueue(val);
    this.sumOfValues += val;

    return this.sumOfValues / this.numOfValues;
  }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(capacity)
 * var param_1 = obj.next(val)
 */

module.exports = {
  MovingAverage
};
