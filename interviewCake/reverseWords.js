//reverse words in a string - not characters in place
//what about punctuation?


//reverse like in a palendrome
var reverseCharacters = function (messageArray, startIndex, endIndex) {

  // walk towards the middle, from both sides
  while (startIndex < endIndex) {
      // swap the front char and back char
      var temp = messageArray[startIndex];
      messageArray[startIndex] = messageArray[endIndex];
      messageArray[endIndex] = temp;
      startIndex++;
      endIndex--;
  }
};

var reverseWords2 = function (str) {
  //1. reverse the string
  var split = str.split('');
  reverseCharacters(split,0, split.length-1);
  //then loop through and reverse each word back to the correct position
  var currStart = 0;
  for (var i = 0; i < split.length; i++) {
    if (split[i] === " ") {
      reverseCharacters(split, currStart, i-1);
      currStart = i+1;
    }
  }
  //once more for the last word
  reverseCharacters(split, currStart, split.length-1);
  return split.join('');
};

console.log(reverseWords2("the eagle has landed"));

