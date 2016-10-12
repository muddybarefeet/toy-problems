//look at the first two elements and switch if first is not less than the second
// move through list until at the end - if not swaps then finish else go through the array again until no swaps
// 0(n2) time coplexity and 0(1) memory

var swap = function (a,b,originalArray) {
  var temp = originalArray[a];
  originalArray[a] = originalArray[b];
  originalArray[b] = temp;
  return originalArray;
};

var bubbleSort = function (arr) {
  if (arr.length === 1) return arr;

  var swapped = true;
  while (swapped) {
    var swapsMade = false;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i-1] > arr[i]) {
        swapsMade = true;
        arr = swap(i,i-1,arr);
      }
    }
    if (!swapsMade) swapped = false;
  }
  return arr;
};

console.log(bubbleSort([1,1,1,1,1,1,1,1,1,0]));