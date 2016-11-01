//Count Total number of zeros from 1 upto n

var countZeros = function (num) {
  var count = 0;
  while (num > 0) {
    count += Math.floor(num/10);
    num = num/10;
  }
  return count;
};

console.log(countZeros(2014));