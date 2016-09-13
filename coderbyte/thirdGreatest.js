/*
Using the JavaScript language, have the function ThirdGreatest(strArr) 
take the array of strings stored in strArr and return the third largest 
word within in. So for example: if strArr is ["hello", "world", "before", "all"] 
your output should be world because "before" is 6 letters long, and 
"hello" and "world" are both 5, but the output should be world because 
it appeared as the last 5 letter word in the array. If strArr was 
["hello", "world", "after", "all"] the output should be after because 
the first three words are all 5 letters long, so return the last one. 
The array will have at least three strings and each string will only 
contain letters. 
Input = "coder","byte","code"Output = "code"
Input = "abc","defg","z","hijk"Output = "abc"

*/

var thirdGreatest = function (strArray) {
  //return third greatest last word in array
  //make a hash keyed by length and arrays of words of that length pushed to array in order appear
  var hash = {};
  var greatest = 0;
  for (var i=0; i<strArray.length; i++) {
    var key = strArray[i].length;
    if (key > greatest) greatest = key;
    if (hash[key]) {
      hash[key].push(strArray[i]);
    } else {
      hash[key] = [strArray[i]];
    }
  }
  console.log(hash);
  //take greatest and loop down from greatest until have three things
  var top3 = [];

  while (top3.length < 3) {
    if (hash[greatest]) {
      top3 = top3.concat(hash[greatest]);
    }
    greatest--;
  }
  //check that only three were added to top3
  return top3[2];

};

console.log(thirdGreatest(["mightier", "mightier", "mightier", "mightier", "mightier", "mightier", "sword"]));

