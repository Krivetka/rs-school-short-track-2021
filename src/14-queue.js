const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.list = [];
  }

  get size() {
    return this.list.length;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (this.list.length === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.list.push(element);
    return this.list;
  }

  dequeue() {
    this.head = this.head.next;
    return this.list.shift();
  }
}

module.exports = Queue;
