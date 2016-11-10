//given an array that sums to 1
//return the index 
var probability = function (inputArr) {

  var random = Math.random();

  var currentSum = 0;

  for (var i = 0; i < inputArr.length; i++) {
    var upperIndex = currentSum + inputArr[i];
    if (currentSum < random && upperIndex > random) {
      return i;
    }
    currentSum+=inputArr[i];
  }

};

console.log(probability([0.3,0.7]));

