/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

 //binary seach: find the mid point and compare target, if there then return 
 //else go higher/lower and get the modpoint there


var binarySearch = function (inputArray,target) {
  var bucket;

  if (inputArray.length === 0) return null;

  var inner = function (leftIndex,rightIndex) {
    if (leftIndex-rightIndex === 0) {
      if (target === inputArray[leftIndex]) return leftIndex;
      return null;
    }
    var mid = Math.ceil( ((rightIndex-leftIndex)/2)+leftIndex );

    var midValue = inputArray[mid];
    
    if (midValue === target) {
      return mid;
    }

    if (target > midValue) {
      return inner(mid+1,rightIndex);
    } else {
      return inner(leftIndex,mid-1);
    }
  };

  return inner(0,inputArray.length-1,target);

};

console.log(binarySearch([22734], 22734));
 
module.exports = binarySearch;





