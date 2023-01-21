const MyHashing = require('./MyHashing');


class PrivateMySet {
  static doubleCapacity(oldBackingArray) {
    const oldBackingArrayLength = oldBackingArray.length;
    const newBackingArray = new Array(oldBackingArrayLength * 2);

    for (let i = 0; i < newBackingArray.length; i++) {
      newBackingArray[i] = new Array(0);
    }

    for (const bucket of oldBackingArray) {
      for (const item of bucket) {
        const hashCode = MyHashing.getHash(
          item,
          newBackingArray.length);

        const bucket = newBackingArray[hashCode];
        bucket.push(item);
      }
    }

    return newBackingArray;
  }
}

class MySet {
  #backingArray = new Array(0);
  size = 0;

  constructor() {
    this.clear();
  }

  clear() {
    this.size = 0;
    this.#backingArray = new Array(1);
    this.#backingArray[0] = new Array(0);
  }

  contains(value) {
    if (this.size === 0) {
      return false;
    }

    if (this.get(value) !== null) {
      return true;
    }

    return false;
  }

  get(value) {
    if (this.size === 0) {
      return null;
    }

    const hashCode = MyHashing.getHash(
      value,
      this.#backingArray.length);

    const bucket = this.#backingArray[hashCode];

    for (const item of bucket) {
      if (item === value) {
        return item;
      }
    }

    return null;
  }

  add(value) {
    if (this.contains(value)) {
      return;
    }

    if (this.size === this.#backingArray.length) {
      this.#backingArray = PrivateMySet.doubleCapacity(this.#backingArray);
    }

    const hashCode = MyHashing.getHash(
      value,
      this.#backingArray.length);

    const bucket = this.#backingArray[hashCode];
    bucket.push(value);
    this.size += 1;
  }

  remove(value) {
    if (this.size === 0) {
      return;
    }

    if (this.get(value) === null) {
      return;
    }

    const hashCode = MyHashing.getHash(
      value,
      this.#backingArray.length);

    const bucket = this.#backingArray[hashCode];
    const newBucket = new Array(0);

    for (const item of bucket) {
      if (item !== value) {
        newBucket.push(item);
      }
    }

    this.#backingArray[hashCode] = newBucket;
    this.size -= 1;

    if (this.size === 0) {
      this.clear();
    }
  }

  union(other) {
    if (other.size === 0) {
      return;
    }

    for (const item of other.values()) {
      this.add(item);
    }
  }

  *values() {
    for (const bucket of this.#backingArray) {
      for (const item of bucket) {
        yield item;
      }
    }
  }

  toString() {
    let str = '[';

    for (const bucket of this.#backingArray) {
      for (const item of bucket) {
        str += `${JSON.stringify(item)},`;
      }
    }

    if (str[str.length - 1] === ',') {
      return `${str.slice(0, str.length - 1)}]`;
    }

    return `${str}]`;
  }
}

module.exports = MySet;
