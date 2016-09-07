// look though array,find the greatest number and swap with current 
// 0(n2) time coplexity and 0(1) memory

var swap = function (index1,index2,array) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
};

var selectionSort = function (input) {
  var currentIndex = 0;

  if (input.length === 1) {
    return input;
  }

  while (currentIndex < input.length-1) {
    //assume no duplicates
    var lowestIndex = input.length-1;
    var lowestNum = input[input.length-1];
    for (var i=currentIndex; i<input.length; i++) {
      if (input[i] < lowestNum) {
        lowestIndex = i;
        lowestNum = input[i];
      }
    }

    //swap index with currentIndex unless the same index
    if (lowestIndex !== currentIndex) {
      input = swap(currentIndex,lowestIndex, input);
    }

    currentIndex++;
  }

  return input;
};
 
console.log(selectionSort([3,3,3,5,1,9,2]));

//could improve by gathering an array of current lows and then adding altogether - reduce the number of times to go through the input
//check all numbers are not the same before switching