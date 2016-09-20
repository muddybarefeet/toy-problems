
/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */

/** example usage:
  * var grandma = new Tree();
  * var mom = new Tree();
  * grandma.addChild(mom);
  * var me = new Tree();
  * mom.addChild(me);
  * grandma.getAncestorPath(me); // => [grandma, mom, me]
*/

var Tree = function(name){
  this.value = name
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};

/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a women can be the parent of a child)
  * more examples:
  *  1.) between me and my brother -> my mom
  *  2.) between me and my cousin -> my grandma
  *  3.) between my grandma and my grandma -> my grandma
  *  4.) between me and a potato -> null
  */

Tree.prototype.getClosestCommonAncestor = function(node1, node2){
  if (!this.isDescendant(node1) || !this.isDescendant(node2)) return null;
  var path1 = this.getAncestorPath(node1);
  var path2 = this.getAncestorPath(node2);
  console.log('one and two', path1, path2);
  for (var i = path1.length - 1; i >= 0; i--) {
    //loop back down through one and checks for the first to exist in the other
    if (path2.indexOf(path1[i]) !== -1) {
      return path1[i];
    }
  }
};

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
  * 2.) mom.getAncestorPath(me) -> [mom, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandma.getAncestorPath(H R Giger) -> null
  */

Tree.prototype.getAncestorPath = function(node){
  var path = [];
  if (!this.isDescendant(node)) return null;
  if (this === node) return [node];

  var inner = function (currentNode) {
    //base found node
    path.push(currentNode.value);
    for (var i=0; i<currentNode.children.length; i++) {
      if (currentNode.children[i] === node) {
        path.push(currentNode.children[i].value);
        return;
      } else if (currentNode.children[i].isDescendant(node)) {
        inner(currentNode.children[i]);
      }
    }

  };
  inner(this);
  return path;
};

var grandma = new Tree("grandma");
var mom = new Tree("mom");
grandma.addChild(mom);
var me = new Tree("me");
var kate = new Tree("kate");
mom.addChild(me);
mom.addChild(kate);
console.log('final',grandma.getAncestorPath(kate));
console.log(grandma.getClosestCommonAncestor(me, kate));