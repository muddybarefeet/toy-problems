//find max contiguous sum of sub array

var maxSum = function (arr) {
  var maxCurrent = arr[0];
  var maxTotalSoFar = arr[0];
  for (var i = 0; i < arr.length; i++) {
    maxCurrent = Math.max(arr[i],maxCurrent + arr[i]);
    if (maxTotalSoFar < maxCurrent) maxTotalSoFar = maxCurrent;
  }

  return maxTotalSoFar;
};

console.log(maxSum([-2,1,-3,4,-1,2,1,-5,4]));