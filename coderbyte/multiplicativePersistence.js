
/*Using the JavaScript language, have the function MultiplicativePersistence(num) take the num 
parameter being passed which will always be a positive integer and return its multiplicative persistence 
which is the number of times you must multiply the digits in num until you reach a single digit. 
For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 
1 * 4 = 4 and you stop at 4. */

var multiplicativePersistance = function (num) {
  var splitNum = num.toString().split("");
  var count = 0;
  while (splitNum.length > 1) {
    //reduce and then split up the number to loop though again in next while loop
    splitNum = splitNum.reduce(function (prev, curr) {
      console.log(prev,curr);
      return prev*curr;
    },1).toString().split("");
    count++;
  }
  return count;
};

console.log('answer',multiplicativePersistance(4499));