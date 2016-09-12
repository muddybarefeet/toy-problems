/*Find the longest word in a string*/

var longestString = function (str) {
  var currentWord = "";
  var currentCount = 0;
  var longestWord = "";
  var longestCount = 0;
  //return the longest string
  for (var i=0; i<str.length; i++) {
    if (str[i].match(/[a-z]/gi) !== null) {
      currentWord += str[i];
      currentCount++;
    } else {
      //if not a letter then new word
      longestWord = longestCount < currentCount ? currentWord : longestWord;
      longestCount = longestCount < currentCount ? currentCount : longestCount;
      currentWord = "";
      currentCount = 0;
    }
  }
  //check that the last word not the end of the sentence
  return longestCount > currentCount ? longestWord : currentWord;
};

console.log(longestString("anna hello"));