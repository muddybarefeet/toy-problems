/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function (method,context) {
  var prevArgs = Array.prototype.slice.call(arguments, 2);

  return function () {
    var args = Array.prototype.slice.call(arguments);
    args = prevArgs.concat(args);
    return method.apply(context,args);
  };

};

var alice = {
  name: 'alice',
  shout: function(){
    console.log(this.name);
  }
};

// var boundShout = bind(alice.shout, alice);
// boundShout(); // alerts 'alice'
boundShout = bind(alice.shout, {name: 'bob'});
boundShout(); // alerts 'bob'

var func = function(a, b){ return a + b };
var boundFunc = bind(func, null, 'foo');
var result = boundFunc('bar');
console.log(result);

