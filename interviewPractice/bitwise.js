
var converNumToBits = function (num) {

  var sum = 0;
  var factor = 0;
  var nums = {};

  var result = [];

  //loop up through the powers of two until the sum is greater than the number and populate string with ones
  while (sum < num) {
    sum += Math.pow(2,factor);
    result.push(1);
    factor++;
  }

  //get the difference between the sum and the actual input
  var difference = sum - num;

  if (difference === 0) return result.join('');

  //reset
  factor = 0;

  //loop down through the result string to replace the necessary 1 with a 0 to make the result = input
  for (var i = result.length-1; i >= 0; i--) {
    // if (difference%2 === 0) {
    //   if (Math.pow(2,factor) === difference) {
    //     var newRes = result;
    //     newRes[i] = 0;
    //     return result.join('');
    //   }
    //   factor++;
    // } else {
    //   //if the difference is odd then need to find multiple number to get to the even
      
    // }
  }

};

console.log(converNumToBits(20));