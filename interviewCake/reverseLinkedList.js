//Your function will have one input: the head of the list.
//Your function should return the new head of the list.



var reverseLinkedList = function (head) {
  if (head === null || head.next === null) return head;

  var current = head;
  var next = head.next;
  head.next = null;

  var reverse = function (current, previous) {
    //if the tail
    if (current.next === null) {
      current.next = previous;
      return;
    }
    var temp = current.next;
    current.next = previous;
    reverse(temp,current);
  };
  reverse(next, head);

};

//------OR-------

var reverse2 = function (head) {
  //could make a copy first and then return the next linked list (not 0(1) space though)
  var current = head;
  var prev = null;
  var next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};