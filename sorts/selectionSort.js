// look though array,find the greatest number and swap with current 
// 0(n2) time coplexity and 0(1) memory


var swap = function (a,b,originalArray) {
  var temp = originalArray[a];
  originalArray[a] = originalArray[b];
  originalArray[b] = temp;
  return originalArray;
};

var selectionSort = function (arr) {
  for (var i = arr.length-1; i >= 0; i--) {
    var section = arr.slice(0,i+1);
    var nextBiggest = Math.max.apply(null,section);
    //dont swap if the same number
    if (nextBiggest !== arr[i]) {
      var indexToSwapWith = section.indexOf(nextBiggest);
      arr = swap(i, indexToSwapWith, arr);
    }
  }
  return arr;
};
 
console.log(selectionSort([3,3,3,5,1,9,2]));

//could improve by gathering an array of current lows and then adding altogether - reduce the number of times to go through the input
//check all numbers are not the same before switching