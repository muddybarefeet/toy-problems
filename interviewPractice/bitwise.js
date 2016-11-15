
var converNumToBits = function (num) {

  var maxFactor = 69;
  var currentSum = Math.pow(2,maxFactor);
  var total = 0;

  var result = "";
  var flipped = false;

  while (maxFactor > 0) {
    if (total + currentSum <= num) {
      result += "1";
      total += currentSum;
      flipped = true;
    } else if (flipped === true) {
      result += "0";
    }
    maxFactor--;
    currentSum = Math.pow(2,maxFactor);
  }

  return result;

};

var numToBits3 = function(num){

  var msb = 1 << 30;
  var result = '';
  var remainder = num;

  for(var i = msb; i > 0 && remainder > 0 ; i = i >> 1){
    if(i <= remainder){
      result += 1;
      remainder = remainder - i;
    }else{
      result += 0;
    }
  }

  return result;

};

console.log(converNumToBits(20));


var convertToBits2 = function (int) {

  var result = "";
  
  for (var i = 1 << 30; i > 0; i = i >> 1) {
    var num = int&i;
    result += num > 1 ? 1 : 0;
  }

  return result;

};

console.log(convertToBits2(20));