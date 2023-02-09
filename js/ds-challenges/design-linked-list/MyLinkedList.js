const MyLinkedList = function () {
  this.head = {next: null};
  this.tail = {next: null};
  this.length = 0;

  this.head.next = this.tail;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.length) {
    return -1;
  }

  let curr = this.head.next;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }

  return curr.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.head.next = {val, next: this.head.next};
  this.length++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (this.length === 0) {
    this.addAtHead(val);
    return;
  }

  let curr = this.head.next;
  while (curr.next !== this.tail) {
    curr = curr.next;
  }

  curr.next = {val, next: curr.next};
  this.length++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.length) {
    return;
  }

  if (index === this.length) {
    this.addAtTail(val);
    return;
  }

  let previous = this.head;
  for (let i = 0; i < index; i++) {
    previous = previous.next;
  }

  previous.next = {val, next: previous.next};
  this.length++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.length) {
    return;
  }

  let previous = this.head;
  for (let i = 0; i < index; i++) {
    previous = previous.next;
  }

  previous.next = previous.next.next;
  this.length--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

module.exports = MyLinkedList;
