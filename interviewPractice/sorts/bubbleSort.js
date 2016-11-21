
var swap = function (arr, ind1, ind2) {
  var temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
};

var bubbleSort = function (input) {

  //swapped variable
  var outerSwapped = true;

  //while
  while(outerSwapped === true) {
    var innerSwapped = false;
    //loop through the array from index 1
    for (var i = 1; i < input.length; i++) {
      //compare the current and prev
        //if in order move on
        //else swap and flip the flag
      if (input[i] < input[i-1]) {
        swap(input, i, i-1);
        innerSwapped = true;
      }
    }
    outerSwapped = innerSwapped;
  }

  return input;
};

console.log(bubbleSort([4,2,7,2,4,1]));