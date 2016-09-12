 /*Find the numbers in a string and add them up*/

//take a string and return the sum of all numbers in the string
var numSearch = function (str) {
  //match anything that is a number
  return str
  //get all nums
  .match(/-?\d+/g)
  //add em up
  .reduce(function (previous,numCurrent) {
    return previous + parseInt(numCurrent,10);
  },0);

};

console.log(numSearch("dhd2sadas55jsds-2d8 9sda asd 00"));