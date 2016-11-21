
var swap = function (arr, ind1, ind2) {
  var temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
};

var selectionSort = function (input) {

  //loop through the number
  for (var i = 0; i < input.length; i++) {
    //find the smallest number left in the rest of the array
    var currentArr = input.slice(i);
    var min = Math.min.apply(null,currentArr);
    //swap with current number
    if (min !== input[i]) {
      swap(input, i, input.indexOf(min));
    }
  }

  return input;
};

console.log(selectionSort([1,4,2,7,3]));