//save already calculated data

var memoise = function (fn) {
  var cache = {};
  return function () {
    //access arguments and save if not saved already
    var args = Array.prototype.slice.call(arguments).toString();
    if (!cache[args]) {
      cache[args] = fn(args);
    }
    return cache[args];
  };
};