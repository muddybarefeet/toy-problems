/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function (arr) {
  var evens = {};
  var maxCount = 0;
  arr.forEach(function (element) {
    if (element%2===0) {
      if(evens[element]) {
        evens[element]++;
        if (evens[element] > maxCount) maxCount = evens[element];
      } else {
        evens[element] = 1;
      }
    }
  });
  if (Object.keys(evens).length === 0) return null;
  for (var i = 0; i < arr.length; i++) {
    if (evens[arr[i]] && evens[arr[i]] === maxCount) return arr[i];
  }
};

var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4


