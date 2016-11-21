
var merge = function (arr1, arr2) {

  var index1 = 0;
  var index2 = 0;
  var result = [];

  while(index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      result.push(arr1[index1]);
      index1++;
    } else {
      result.push(arr2[index2]);
      index2++;
    }
  }
  //one array still has numbers in it
  var arrayLeft = index1 === arr1.length ? arr2 : arr1;
  var indexLeft = index1 === arr1.length ? index2 : index1;

  return result.concat(arrayLeft.slice(indexLeft));
};

// console.log(merge([2,6,9],[1,3,5,11]));

var mergeSort = function (input) {
  
  if (input.length === 1) return input;

  var mid = Math.floor(input.length/2);
  var left = input.slice(0,mid);
  var right = input.slice(mid);

  return merge(mergeSort(left), mergeSort(right));

};

console.log(mergeSort([99,43,27,23,88,14]));