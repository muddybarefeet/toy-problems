
var quickSort = function (input) {

  if (input.length === 0) return [];

  var pivot = input[input.length-1];
  var left = [];
  var right = [];


  //loop not including the pivot
  for (var i = 0; i < input.length-1; i++) {
    if (input[i] < pivot) {
      left.push(input[i]);
    } else {
      right.push(input[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));

};

console.log(quickSort([5,2,8,1,13,51]));