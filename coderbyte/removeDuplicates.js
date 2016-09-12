//remove duplicates from input array



var remDups = function (inputArr) {
  //take array and output unique array
  var result = {};
  for (var i=0; i<inputArr.length; i++) {
    result[inputArr[i]] = true;
  }
  return Object.keys(result);
};

console.log(remDups([1,5,3,8,9,1,5,5]));