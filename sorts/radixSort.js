// have buckets 0-9

//find the number with the most digits and padd the start of the rest of the numbers to contain the same amount of digits
//starting from the units number sort into buckets according to the number
//remove from buckets from starting from the sirst thing in the first buckets

//repeat for the tens position etc up to the length of the numbers

//time complexity = 0(kn) where n is the length of the input and k is the nuber of passes to be made

var sortIntoBucketsAndReturnNewOrder = function (index, numbersArr) {
  //buckets 0-9
  var bucketArr = [[],[],[],[],[],[],[],[],[],[]];
  var result = [];
  for (var i = 0; i < numbersArr.length; i++) {
    var currentIndex = numbersArr[i][index];
    bucketArr[currentIndex].push(numbersArr[i]);
  }
  //then remove the numbers from the buckets
  for (var k = 0; k < bucketArr.length; k++) {
    result = result.concat(bucketArr[k]);
  }
  return result;
};

// console.log('----',sortIntoBucketsAndReturnNewOrder(2,[ '003', '044', '777', '002' ]));

var radixSort = function (arr) {
  var maxLength = Math.max.apply(null, arr).toString().split("").length;

  var paddedArr = arr.map(function (num) {
    var numLength = num.toString().split('').length;
    var diff;
    if (numLength < maxLength) {
      diff = maxLength-numLength;
      return "0".repeat(diff) + num;
    } else {
      return num.toString();
    }
  });

  var currentIndex = maxLength-1;

  for (var i = 0; i <= maxLength-1; i++) {
    paddedArr = sortIntoBucketsAndReturnNewOrder(currentIndex, paddedArr);
    currentIndex-=1;
  }
  return paddedArr;
};

console.log( radixSort([3,44,777,2]) );