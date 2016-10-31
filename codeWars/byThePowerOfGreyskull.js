//return all unique permutations of the input array

function power(arr) {
  // TODO: Program me
  var result = [];
  var obj = {};
  var inner = function (soFar, toGo) {

    var sorted = soFar.sort().join("").toString();
    if (!obj[sorted]) {
      result.push(soFar);
      obj[sorted] = true;
    }
    
    if (toGo.length === 0) return;
    
    for(var i=0; i<toGo.length;i++) {
      var newInput = soFar.slice().concat(toGo[i]);
      var newRest = toGo.slice();
      newRest.splice(i,1);
      inner(newInput, newRest);
    }
    
  };
  inner([],arr.slice());
  return result;
}

console.log(power([1,2]));