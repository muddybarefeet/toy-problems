
var LinkedList = function () {
  this.head = null;
  this.tail = null;
};

var makeNode = function (val) {
  var node = {};
  node.value = val;
  node.next = null;
  return node;
};

LinkedList.prototype.insert = function (value) {
  var newNode = makeNode(value);
  if (this.head === null) {
    this.head = newNode;
  } else {
    this.tail.next = newNode;
  }
  this.tail = newNode;
};

LinkedList.prototype.reverseList = function () {

  var prev = null;
  var node  = this.head;
  this.tail = node;

  while (node.next !== null) {
    var currentNext = node.next;
    node.next = prev;
    prev = node;
    node = currentNext;
  }

  node.next = prev;
  this.head = node;

  //then need to set the tail so loop through the list again
  var secondLoopNode = this.head;
  while (secondLoopNode.next !== null) {
    secondLoopNode = secondLoopNode.next;
  }
  this.tail = secondLoopNode;

};

var list = new LinkedList();
list.insert(5);
list.insert(6);
list.insert(7);
list.reverseList();
// console.log(list);

