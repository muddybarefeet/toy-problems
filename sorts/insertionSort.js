//for shorter arrays - just as bad as bubble sort in time complexity and has constant memory


var insertionSort = function (input) {
  //loop through the array and compare pairs - if one before is greater then swap and keep swapping until the one on the left is sorted 
  for (var i=0; i<input.length; i++) {
    var index = i;
    while (input[index] > input[index+1] && index >= 0) {
      var temp = input[index];
      input[index] = input[index+1];
      input[index+1] = temp;
      index--;
    }
  }
  return input;
};

console.log(insertionSort([3,2,7,4,1,9]));
