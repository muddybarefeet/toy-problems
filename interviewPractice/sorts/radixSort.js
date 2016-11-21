
// take an array and the index to sort by and return the new array
var helper = function (arr, index) {

  var buckets = [[],[],[],[],[],[],[],[],[],[]];
  var results = [];

  arr.forEach(function (item) {
    buckets[item[index]].push(item);
  });

  for (var i = 0; i < buckets.length; i++) {
    results = results.concat(buckets[i]);
  }

  return results;
};

// console.log(helper(["03","01","09","04"], 1));


var radixSort = function (input) {
  //1. work out longest number
  var maxNumLength = Math.max.apply(null, input);
  maxNumLength = maxNumLength.toString().length;
  //2.pad all numbers to they are the same length
  var newIn = input.map(function (element) {
    var inputLength = element.toString().length;
    var difference = maxNumLength - parseInt(inputLength,10);
    return (("0").repeat(difference) + element);
  });
  //3. loop down throught each and on each loop sort by the curent index looking at
  while(maxNumLength > 0) {
    newIn = helper(newIn, maxNumLength-1);
    maxNumLength--;
  }
  //4. return
  return newIn;
};


console.log(radixSort([6,3,88,2,10,372]));