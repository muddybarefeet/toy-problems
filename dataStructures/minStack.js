//make a stack that in addition to pop and push had a min() that in CONSTANT time
//returns the minimum value in a stack
//if a duplicate value equal to the min is added nothing gets added to the min count 
//Time complexity: worst case Linear

var Stack = function () {

  this.stack = []; //4,7,1
  this.minStack = []; //4,1

};

Stack.prototype.push1 = function (val) {
  if (this.minStack.length === 0 || this.minStack[this.minStack.length-1] > val) {
    this.minStack.push(val);
  }
  this.stack.push(val);
  return this.stack;
};

Stack.prototype.pop1 = function () {
  var last = this.stack.pop();
  if (this.minStack[this.minStack.length-1] === last) {
    this.minStack.pop();
  }
  return last;
};

Stack.prototype.min = function () {
  return this.minStack[this.minStack.length-1];
};

var s = new Stack();
s.push1(4);
s.push1(77);
s.push1(1);
s.push1(10);
console.log(s);
s.pop1();
s.pop1();
console.log(s);