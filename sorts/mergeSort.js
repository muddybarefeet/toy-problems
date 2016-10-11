//1. split arrays down the on element long 
//2. merge back together

//timecomplexity: 0(n log(n))
//memory: depends

//take two sorted arrays and merge them into one
var merge = function (array1, array2) {
  var merged = [];
  while (array1.length && array2.length) {
    if (array1[0] < array2[0]) {
      merged.push(array1.shift());
    } else {
      //if equal or array2s first is less
      merged.push(array2.shift());
    }
  }
  if (array1.length) {
    merged = merged.concat(array1);
  } else if (array2.length) {
    merged = merged.concat(array2);
  }
  return merged;
};

var mergeSort = function (input) {
  if (input.length < 2) {
    return input;
  }
  var midPoint = Math.floor(input.length-1/2);
  //make two sub arrays
  var left = input.slice(0,midPoint);
  var right = input.slice(midPoint);
  return merge(mergeSort(left),mergeSort(right));
};

console.log(mergeSort([4,3,6,22,7,2]));

