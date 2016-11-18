// Write a function that returns the index of an element in a sorted integer array


//=> 2, 5 => -1

/*[1, 3, 4, 9, 10], 5
  
  left: 2
  right: 3
  
  mid: 2
  current: 4
  
  mid:3
  value:9
  
*/


var findIndex = function (inputArr, targetVal) {
  
  //left and right pointer set to the start and end indexes
  var left = 0;
  var right = inputArr.length-1;
  
  //while right pointer is greater than the left pointer  and difference of more than one between the pointers
  while (left < right) {
    
    //find mid point between current index markers
    var mid = Math.floor((right-left)/2)+left);
  
    //if the value at the mid index is the target return mid index
    if (inputArr[mid] === targetVal) return mid;
    
    //if the number at the middle index is more than the target
    if (inputArr[mid] > target) {
      //move right index to mid
      right = mid - 1;
    } else {
      //if the number at the middle index is less than the taregt then
      //move the left index to mid
      left = mid + 1;
    }
  
  }
    
};