// If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

// Usage example:

// var complexFunction = function(arg1, arg2) {  complex calculation in here  };
// var cachedFunction = cache(complexFunction);

// cachedFunction('foo', 'bar'); // complex function should be executed
// cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
// cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments


function cache(func) {
  var dictionary = {};
  var that = this;
  return function () {
    var args = Array.prototype.slice.call(arguments);
    var key = JSON.stringify(args);
    if (!dictionary.hasOwnProperty(key)) {
      dictionary[key] = func.apply(that,args);
    }
    return dictionary[key];
  }
}

var complexFunction = function(arg1, arg2) {  return arguments; };
var cachedFunction = cache(complexFunction);
console.log(cachedFunction());
// console.log(cachedFunction('baz','foo', 'bar'));
