//make a binary tree diagram constructor

var Tree = function(number) {

  var result = {};

  result.value = number;
  result.rightSide = null;
  result.leftSide = null;


  //methods the tree should have

  result.insert = function(num) {
    if (num < result.value) {
      if (result.leftSide === null) {
        result.leftSide = Tree(num);
      } else {
        result.leftSide.insert(num);
      }
    } else if (num >= result.value) {
      if (result.rightSide === null) {
        result.rightSide = Tree(num);
      } else {
        result.rightSide.insert(num);
      }
    }
  };

  result.search = function(searchNum) {
    if (result.value === searchNum) {
      return true;
    }
    if (searchNum<result.value && result.leftSide !== null) {
      return result.leftSide.search(searchNum);
    } else if (searchNum>result.value && result.rightSide !== null) {
      return result.rightSide.search(searchNum);
    }
    return false;
  };

  result.bredthFirst = function(tree) {
    var queue = [];
    var visited = [];
    visited.push(tree.value);
    queue.push(tree.leftSide);
    queue.push(tree.rightSide);
    while (queue.length) {
      //take the first item and get its right and left and add to the queue
      //remove from front of queue and add to end of visited
      var current = queue.shift();
      if (current.leftSide) {
        queue.push(current.leftSide);
      }
      if (current.rightSide) {
        queue.push(current.rightSide);
      }
      visited.push(current.value);
    }
    return visited;
  };

  //bucket - visit root, left, right
  result.depthFirstPreOrder = function(tree){
    var result = [];
    result.push(tree.value);
    var inner = function (tree) {
      if (tree.leftSide !== null) {
        inner(tree.leftSide);
        result.push(tree.leftSide.value);
      } else if (tree.leftSide === null) {
        return;
      }
      if (tree.rightSide !== null) {
        inner(tree.rightSide);
        result.push(tree.rightSide.value);
      } else if (tree.rightSide === null) {
        return;
      }
    };
    inner(tree);
    return result;
  };

  //visit both sides and then the root
  result.depthFirstPostOrder = function(tree){
    return this.depthFirstPreOrder(tree.leftSide).concat(this.depthFirstPreOrder(tree.rightSide),tree.value);
  };

  //visit left then root then right
  result.depthFirstInOrder = function(tree){
    //pass left and right to the preOrder
    return this.depthFirstPreOrder(tree.leftSide).concat(tree.value,this.depthFirstPreOrder(tree.rightSide));
  };

  return result;

};

  
var ve = Tree(10);
ve.insert(5);
ve.insert(20);
ve.insert(2);
ve.insert(7);
ve.insert(15);


// console.log(ve);

// var x = ve.search(5); //[jhjhj, hkjk, kjk]
// console.log(x);

var isBalanced = function (tree) {
  if (checkHeight(tree) > -1) {
    return true;
  }
  return false;
};

var checkHeight = function (node) {
  console.log(node);
  //if a leaf the return 0
  if (node === null) {
    return 0;
  }
  //get height of sides
  var heightLeft = checkHeight(node.leftSide);
  var heightRight = checkHeight(node.rightSide);
  console.log("---->",heightLeft,heightRight)
  //if either sides height is -1 then return -1
  if (heightRight === -1 || heightLeft === -1) {
    return -1;
  }
  //if the diff in hight of eiher subtree is greater than 1 then not balanced
  if ( Math.abs(heightLeft - heightRight) > 1 ) {
    return -1;
  }
  //return the greater height
  return heightRight >= heightLeft ? heightRight + 1 : heightLeft + 1;
};

console.log(isBalanced(ve));
