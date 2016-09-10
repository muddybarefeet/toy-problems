//see if a binary tree is balanced -return true/false

var isBalanced = function (tree) {
  if (checkHeight(tree) > -1) {
    return true;
  }
  return false;
};

var checkHeight = function (node) {
  //if a leaf the return 0
  if (node === null) {
    return 0;
  }
  //get height of sides
  var heightLeft = checkHeight(node.leftSide);
  var heightRight = checkHeight(node.rightSide);
  //if either sides height is -1 then return -1
  if (heightRight === -1 || heightLeft === -1) {
    return -1;
  }
  //if the diff in hight of eiher subtree is greater than 1 then not balanced
  if ( Math.abs(heightLeft - heightRight) > 1 ) {
    return -1;
  }
  //return the greater height (plus one to get to height of node that did the initial call)
  return heightRight >= heightLeft ? heightRight + 1 : heightLeft + 1;
};
