
var removeDuplicates = function (arr) {
  var currentlySeen = {};
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    // console.log('arri',arr[i])
    if (!currentlySeen.hasOwnProperty([arr[i]])) {
      result.push(arr[i]);
      currentlySeen[arr[i]] = true;
    }
  }

  return result;
};

console.log(removeDuplicates([5,2,2,2,3,3,1,1,4,3,2,2]));