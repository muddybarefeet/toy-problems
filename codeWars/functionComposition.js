// add1 = function(a){return a + 1}
// id = function(a){return a}
// Test.expect( compose(add1,id)(0) == 1 )

function compose(f,g) {
  // Compose the two functions here!
  var funcArgs = Array.prototype.slice.call(arguments);
  return function () {
    var args = Array.prototype.slice.call(arguments);
    
    return funcArgs.reduce(function (prev, curr) {
      return curr.call(null,prev);
    },0);

  }
}

add1 = function(a){return a + 1}
id = function(a){return a}
id2 = function(a){return a + 2}
id4 = function(a){return a + 4}
console.log(compose(add1,id, id2, id4)(0))