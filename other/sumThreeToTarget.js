// Finding three elements in an array whose sum is closest to an given number

var sumTwo = function (arr, target) {
  console.log('target arr', arr, target);
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  for (var i = 0; i < arr.length; i++) {
    var diff = Math.abs(arr[i]-target);
    if (obj[diff]) {
      return [diff,obj[diff]];
    }
  }
  return false;
};

var sumThree = function (a, t) {
  for (var i = 0; i < a.length; i++) {
    var diff = Math.abs(a[i]-t);
    //want to find if the rest of the array contains the difference
    var newArr = a.slice();
    newArr.splice(i,1);
    if (sumTwo(newArr,t) !== false) return sumTwo(newArr, t).concat(a[i]);
  }
  return -1;
};

console.log(sumThree([2,3,4,5,1,4],8));


