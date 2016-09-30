// Write a function fib() that a takes an integer nnn and returns the nth fibonacci ↴ number.

var finalResult = (function () {

  var memoize = {};

  return function fib (fibNum) {
    if (memoize.hasOwnProperty([fibNum])) return memoize[fibNum];
    if(fibNum < 0) return "not valid fibonacci number";
    if (fibNum === 0 || fibNum === 1) {
        return fibNum;
    }
    memoize[fibNum] = fib(fibNum-1)+fib(fibNum-2);
    return memoize[fibNum];
  };

})();

console.log(finalResult(7));


//------bottom up-------- makes this a linear solution


var fib = function (fibNum) {

    if(fibNum < 0) return "not valid fibonacci number";
    if (fibNum === 0 || fibNum === 1) {
        return fibNum;
    }

    var prevPrev = 0;
    var prev = 1;
    var current = 0;
    
    for (var i = 1; i < fibNum; i++) {
      current = prev + prevPrev;
      prevPrev = prev;
      prev = current;
    }
    return current;
};

fib(7);

