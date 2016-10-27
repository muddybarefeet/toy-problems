// add1 = function(a){return a + 1}
// id = function(a){return a}
// Test.expect( compose(add1,id)(0) == 1 )

function compose(f,g) {
  // Compose the two functions here!
  var funcArgs = Array.prototype.slice.call(arguments);
  return function () {
    var args = Array.prototype.slice.call(arguments);
    var firstRes = funcArgs[0].apply(null,args);
    for (var i=1; i<funcArgs.length;i++){
      firstRes = funcArgs[i].call(null,firstRes);
    }
    return firstRes;
  };
}

add1 = function(a,b){return a + b}
id = function(a){return a * a}
console.log(compose(add1,id)(2,3));