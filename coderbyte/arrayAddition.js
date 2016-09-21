/*
Using the JavaScript language, have the function ArrayAdditionI(arr) 
take the array of numbers stored in arr and return the string true if 
any combination of numbers in the array can be added up to equal the 
largest number in the array, otherwise return the string false. For 
example: if arr contains [4, 6, 23, 10, 1, 3] the output should return 
true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not 
contain all the same elements, and may contain negative numbers. 
3,5,-1,8,12= true
*/


var isSumable = function (arr,target,sum, seen) {
  
  sum = sum || 0;
  seen = seen || {};
  
  if (sum === target) return true;
  if (sum > target) return false;

  for (var i=0; i<arr.length; i++) {
    if (!seen[arr[i]]) {
      //remove thing out of the array that going to add
      var newArr = arr.slice(0);
      newArr.splice(i,1);
      if (isSumable(newArr,target,sum+arr[i],seen)) {
        return true;
      }
    }
  }
  return false;
};

// console.log('answer',isSumable([4, 6],7));



var maxArray = function (arr) {

  var maxNum = arr.sort(function(a,b) {
    return a-b;
  }).pop();
  console.log('max',maxNum,arr);

  var restSum = arr.reduce(function (prev, current) {
    return prev+current;
  },0);

  var difference = restSum - maxNum;
  console.log('sum rest, diff',restSum,difference);

  //if the difference is less then 0 then the sum will not add up to the max
  if (difference < 0) return false;
  //if there is no difference between sum and max OR the difference is in the array
  if (difference === 0 || arr.indexOf(difference) !== -1) return true;

  //sum greater than diff then try and find a match
  if (restSum > difference) {
    //make array of 
    var lessThanDiffArr = arr.map(function (elem) {
      if (elem < difference) {
        return elem;
      }
    });
    return isSumable(lessThanDiffArr, difference);
  }
  //no true return false
  return false;

};

console.log('answer',maxArray([4, 6, 23, 10, 1, 3]));
