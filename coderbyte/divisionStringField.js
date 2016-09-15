/*divide two numbers and then return the answer with correct 
comma notation and to the nearest decimal place*/

var divideAndFormat = function (numA,numB) {
  var arr = Math.round((numA/numB)).toString().split("");
  var index = 0;
  var toReturn = [];
  console.log(arr);
  for (var i = arr.length-1; i >= 0; i--) {
    //index to see how may passed
    index++;
    //add to front current thing
    toReturn.unshift(arr[i]);
    //if index is divisible by three then add comma
    if (index%3 === 0 && i !== 0) {
      toReturn.unshift(",");
    }

  }
  return toReturn.join("");
};

console.log(divideAndFormat(100,5));

