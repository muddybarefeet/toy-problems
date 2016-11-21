
var swap = function (arr, ind1, ind2) {
  var temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
};

var insertionSort = function (input) {
  //loop through the array
  for (var i = 1; i < input.length; i++) {
    if (input[i] < input[i-1]) {
      //if a pair is not in order
      //swap until in order
      var index1 = i;
      var index2 = i-1;
      while(input[index1] < input[index2]) {
        swap(input, index1, index2);
        index1--;
        index2--;
      }
    }
  }
  return input;
};

console.log(insertionSort([3,7,1,2,9,8]));