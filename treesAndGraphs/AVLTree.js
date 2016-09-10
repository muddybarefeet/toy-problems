//make a balanced binary tree



var Tree = function(number) {

  var result = {};

  result.value = number;
  result.rightSide = null;
  result.leftSide = null;

  var makeNode = function (value,depth) {
    var node = {};
    node.value = value;
    node.left = {};
    node.right = {};
    //node.depth = depth;
    return node;
  };

  result.insert = function (num) {
    //keep count of depth to pass to new node on insertion
    if (num < result.value) {
      //if right null and left not this will end up being unbalanced
      if (result.leftSide !== null && result.rightSide === null) {
        // get the value of the left side
        var leftNode = result.leftSide;
        if (leftNode.value < num) {
          //this will be a line
          //reset left child to current leaf
          result.leftSide = Tree(num);
          //set the current node as right??
          //set the leftNode as the current node??
        } else {
          //this will be a zig zag - two rotations
          //1.
          result.leftSide = Tree(num);
          result.leftSide.leftSide = leftNode;
          //2.
          //res.left = current
          //current is right child
          //curr left = leftNode (no change needed as already left child of mid one)
        }
      }
      else {
         result.leftSide.insert(num);
      }
      // if (result.leftSide === null) {
      //   result.leftSide = Tree(num);
      // } 
    } else if (num > result.value) {
      // if (result.rightSide === null) {
      //   result.rightSide = Tree(num);
      // } else {
      //   result.rightSide.insert(num);
      // }
    }
  };

  result.rotateLeft = function () {
    //get the right child
    //make the right child the current node (update the parent pointer to this ...??)
    //make the current node the left child
  };

  result.rotateRight = function () {
    //get the left child
    //make the left child the current node (update the parent pointer to this ...??)
    //make the current node the right child
  };

  return result;

};