
//delete a node from a singly linked list

function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;



var deleteNode = function (node) {
  var currentNode = node;
  if (currentNode.next) {
    currentNode.value = currentNode.next.value;
  } else {
    return "Cannot remove the last node in the list";
  }
};

deleteNode(b);