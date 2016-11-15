//make a binary tree

var Tree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

Tree.prototype.insert = function (num) {
  //if less than value go left
    //if null then insert a new tree
  if (num < this.value) {
    if (this.left !== null) {
      this.left.insert(num);
    } else {
      this.left = new Tree(num);
    }
  } else {
  //if more then go right
    //if null insert new tree
    if (this.right !== null) {
      this.right.insert(num);
    } else {
      this.right = new Tree(num);
    }
    
  }
};


Tree.prototype.BFSelect = function(){

  var seen = [];
  var queue = [this];

  if (this.left === null && this.right === null) return [this.value];

  //get the first item from the queue - get is children and add them to the queue
  //add current to seen
  while(queue.length > 0) {
    var current = queue.shift();
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
    seen.push(current.value);
  }

  return seen;

};

Tree.prototype.DFSelect = function (root) {
  var result = [];
  
  var inner = function (root) {

    result.push(root.value);

    if (root.left) {
      inner(root.left);
    }

    if (root.right) {
      inner(root.right);
    }

  };
  inner(root);

  return result;

};

var tree = new Tree(10);
tree.insert(5);
tree.insert(15);
tree.insert(1);
tree.insert(7);
tree.insert(22);
tree.insert(11);
console.log(tree.BFSelect());
console.log(tree.DFSelect(tree));

// console.log(tree);

//preorder: root - left - right
//inorder: left - root -right
// post-order: left - right - root



