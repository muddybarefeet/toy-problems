/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function () {
  this.head = null;
  this.tail = null;
};

var makeNode = function (value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

LinkedList.prototype.addToTail = function (val) {
  var newNode = makeNode(val);
  if (this.head === null) {
    //then add to head and tail
    this.head = newNode;
  } else {
    this.tail.next = node;
  }
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function () {
  //make a new head and make it point to the head next value
  var removedHead;
  if (this.head === this.tail) {
    removedHead = this.head.value;
    delete this.head;
    delete this.tail;
  } else {
    removedHead = this.head.value;
    this.head = this.head.next;
  }
  //return the head value that was removed
  return removedHead;
};

LinkedList.prototype.contains = function (number) {
  //check if any values in the list match
  if (this.head.value === number) {
    return true;
  }
  var current = this.head;
  while (current.next !== null) {
    if (current.next.value === number) {
      return true;
    }
    current = current.next;
  }
  return false;
};

var list = new LinkedList();
list.addToTail(4);
list.addToTail(5);
list.addToTail(12);
list.addToTail(22);
console.log(list.removeHead());