/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (str) {
  var currentLetter = str[0];
  var currStart = 0;
  var currentCount = 0;
  var maxCount = 0;
  var maxRange = [0,0];

  for (var i = 1; i < str.length; i++) {
    if (str[i] === currentLetter) {
      currentCount++;
    } else {

      if (currentCount > maxCount) {
        maxCount = currentCount;
        maxRange = [currStart, i-1];
      }
      currentLetter = str[i];
      currentCount = 0;
      currStart = i;
    }
  }
  //return start and end indices
  return maxRange;
};

console.log(longestRun("abcd"));
