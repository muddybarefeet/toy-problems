/*
 * Assignment: Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere
 *
 * Explanation:
 * 
 * Generally, we assume that a linked list will terminate in a null next pointer, as follows:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * var nodeA = Node('A');
 * var nodeB = nodeA.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * var nodeD = nodeC.next = Node('D');
 * var nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 */

// The idea is to have two references to the list and move them at different speeds. Move one forward by 1 node and the other by 2 nodes.

// If the linked list has a loop they will definitely meet.
// Else either of the two references(or their next) will become null.

var Node = function(value){
  return { value: value, next: null };
};

var isCircular = function (list) {
  //check that the list is not only one long
  var slow = list;
  //check for values ebing in range
  if (!slow.next && !slow.next.next) {
    return false;
  }
  var fast = list.next.next;

  //while no null next keep moveing forward
  while (fast.next && fast.next.next) {
    if (slow === fast) {
      return true;
    }

    fast = fast.next.next;
    slow = slow.next;

  }

  return false;
};

var nodeA = Node('A');
var nodeB = nodeA.next = Node('B');
var nodeC = nodeB.next = Node('C');
var nodeD = nodeC.next = Node('D');
var nodeE = nodeD.next = Node('E');
console.log(isCircular(nodeA)); // => false
nodeE.next = nodeB;
console.log(isCircular(nodeA));



