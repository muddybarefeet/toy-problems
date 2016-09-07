//look at the first two elements and switch if first is not less than the second
// move through list until at the end - if not swaps then finish else go through the array again until no swaps
// 0(n2) time coplexity and 0(1) memory

var swap = function (index1,index2,array) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
};

var bubbleSort = function (array) {

  var swappedAnElement = true;

  //return the array straight away
  if (array.length === 1) {
    return array;
  }
  var count = 0;
  //loop through the array and swap in place
  while (swappedAnElement === true) {
    count++;
    console.log(count);
    var swaps = false;
    for (i=0; i<array.length; i++) {
      if (array[i] > array[i+1]) {
        array = swap(i,i+1,array);
        swaps = true;
      }
    }
    //check if any swaps if none that stop the while loop
    if (swaps === false) {
      swappedAnElement = false;
    }
  }
  
  return array;
};

console.log(bubbleSort([1,1,1,1,1,1,1,1,1,0]));