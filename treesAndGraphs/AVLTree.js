//make a balanced binary tree



var Tree = function(number) {

  var result = {};

  result.value = number;
  result.rightSide = null;
  result.leftSide = null;

  var makeNode = function (value,depth) {
    var node = {};
    node.value = value;
    node.leftSide = {};
    node.rightSide = {};
    //node.depth = depth;
    return node;
  };

  result.insert = function (num) {
    //keep count of depth to pass to new node on insertion
    if (num < result.value) {

      //1. check there is a left
      if (result.leftSide !== null) {
        //then check that the if current add num which side
        var parentNode = result.leftSide;
        if (num > parentNode.value) {
          if (parentNode.leftSide === null && parentNode.rightSide !==null) {
            var childNode = parentNode.rightSide;
            if (num < childNode.value) {
              //zigzag
            } else {
              //line
            }
          }
        }
      } else {
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