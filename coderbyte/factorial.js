/*find the factorial of a given number*/
// RECURSE!

var finalOne = (function () {

  var cache = {};

  return function factorial (n) {
    if (cache[n]) return cache[n];
    
    if (n===0 || n===1){
      return 1;
    }

    cache[n] = factorial(n-1)*n;
    return cache[n];
  };

})();
  

console.log(finalOne(4));
