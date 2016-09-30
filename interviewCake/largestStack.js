
//given functional code to make a stack

function Stack() {
    // initialize an empty array
    this.items = [];
}

// push a new item to the last index
Stack.prototype.push = function(item) {
    this.items.push(item);
};

// remove the last item
Stack.prototype.pop = function() {

    // if the stack is empty, return null
    // (it would also be reasonable to throw an exception)
    if (!this.items.length) return null;

    return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function() {
    if (!this.items.length) return null;
    return this.items[this.items.length -1];
};

// Use your Stack class to implement a new class MaxStack 
//with a function getMax() that returns the largest element in the stack. getMax() should not remove the item.

var MaxStack = function () {
    this.stack     = new Stack();
    this.maxStack = new Stack();
};

MaxStack.prototype.push = function (item) {
  if (item > this.maxStack.peek()) {
    this.maxStack.push(item);
  }
  this.stack.push(item);
};

MaxStack.prototype.pop = function () {
  var removedItem = this.stack.pop();
  if (removedItem === this.maxStack.peek()) {
    this.maxStack.pop();
  }
  return removedItem;
};

MaxStack.prototype.getMax = function () {
  return this.maxStack.pop();
};

MaxStack.push(10);
MaxStack.push(4);
MaxStack.push(20);
MaxStack.push(50);
MaxStack.pop();
MaxStack.getMax();



