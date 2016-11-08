//counting sort: make array: indexes represent the number from the input and the value represent the frequency

//e.g. input = [1,9,3,1] ---> arr = [ ,2,,1,,,,,,,1], then make a new array including duplicates

//tie complexity is 0(n+k) where k is the range of the numbers in the input

var countSort = function (arr) {
  var numsToCount = [];
  var result = [];
  var max = Math.max.apply(null,arr);

  //linear
  for (var i = 0; i < arr.length; i++) {
    if (numsToCount[arr[i]] === undefined) {
      numsToCount[arr[i]] = 1;
    } else {
      numsToCount[arr[i]]++;
    }
  }

  //looping up to the max number in the input array therefore could be looping much further than the input length
  for (var h = 0; h < numsToCount.length; h++) {
    if (numsToCount[h] !== undefined) {
      var frequency = numsToCount[h];
      //depend on the number of repeats
      while (frequency > 0) {
        result.push(h);
        frequency--;
      }
    }
  }
  return result;

};

console.log(countSort([6,6,6,6,6,6,6,6,6,6,6,6,6,6]));