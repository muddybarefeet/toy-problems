/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var sum = function (arrToSum) {
  return arrToSum.reduce(function (elementPrev, elementCur) {
    return elementPrev * elementCur;
  },1);
};

//find three largest numbers and multiply
var largestProductOfThree = function (arr) {
  var arrSorted = arr.sort(function (a,b) {
    return b-a;
  });
  
  var product = sum(arrSorted.slice(0,3));
  var product2 = sum([arrSorted[0],arrSorted[arrSorted.length-2], arrSorted[arrSorted.length-1]]);

  return product2 > product ? product2 : product;

};

console.log(largestProductOfThree([-1,-40,-333]));

