const PrivateMySet = require('./PrivateMySet');


class MySet {
  #backingArray = [];
  size = 0;

  constructor() {
    this.clear();
  }

  clear() {
    this.size = 0;
    const defaultBackingArrayLength = 8;
    this.#backingArray = new Array(defaultBackingArrayLength);
    for (let i = 0; i < defaultBackingArrayLength; i++) {
      this.#backingArray[i] = [];
    }
  }

  contains(value) {
    if (this.size === 0) {
      return false;
    }

    return this.get(value) !== null;
  }

  get(value) {
    if (this.size === 0) {
      return null;
    }

    const hashCode = PrivateMySet.MyHashingDelegate.getHash(
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

    const hashCode = PrivateMySet.MyHashingDelegate.getHash(
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

    const hashCode = PrivateMySet.MyHashingDelegate.getHash(
      value,
      this.#backingArray.length);

    const bucket = this.#backingArray[hashCode];
    const newBucket = [];

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

  * values() {
    for (const bucket of this.#backingArray) {
      for (const item of bucket) {
        yield item;
      }
    }
  }

  toString() {
    let str = '';

    for (const bucket of this.#backingArray) {
      for (const item of bucket) {
        str += `${JSON.stringify(item)},`;
      }
    }

    if (str[str.length - 1] === ',') {
      return `[${str.slice(0, str.length - 1)}]`;
    }

    return `[${str}]`;
  }
}

module.exports = MySet;
