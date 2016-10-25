
// You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.

// Subsequent calls to the resulting function should have no effect (and should return undefined).

// For example:

// logOnce = once(console.log)
// logOnce("foo") // -> "foo"
// logOnce("bar") // -> no effect

var once  = function (fn) {
  var used = false;
  return function() {
    var args = Array.prototype.slice.call(arguments);
    if(used === false) {
      used = true;
      return fn.apply(null,args);
    }
  };
};

logOnce = once(console.log);
console.log(logOnce("foo")) // -> "foo"
console.log(logOnce("bar")) // -> no effect
