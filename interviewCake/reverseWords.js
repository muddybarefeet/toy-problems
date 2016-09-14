//reverse words in a string - not characters in place
//what about punctuation?

var reverseWords = function (str) {
  //split to words
  var arrStr = str.split(' ');
  var start = 0;
  var end = arrStr.length-1;
  while (start !== end && start < end) {
    var temp = arrStr[start];
    arrStr[start] = arrStr[end];
    arrStr[end] = temp;
    start++;
    end--;
  }
  return arrStr.join(" ");
};

console.log(reverseWords("this is a sentence!"));