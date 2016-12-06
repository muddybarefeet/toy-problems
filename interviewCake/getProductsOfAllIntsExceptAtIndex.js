
//take an array an return an array that contains the product of everything else in the array except the num at the current index

var getProductsOfAllIntsExceptAtIndex = function (arr) {

  //1. find product of all and save to variable\
  var total = arr.reduce(function (prev, current) {
    return prev* current;
  },1);
  //2. loop through the array and for each number divide total but current
  return arr.map(function (item) {
    return total/item;
  });

};

console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]));
