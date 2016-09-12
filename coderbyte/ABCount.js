
/*return true if there is exactly 3 letters between the a 
and b in the input string at least once in the sentence*/

var ABCount = function (str) {
  //take string and return boolean
  //1.check that there is an a and b in the sentence - if not return false? could add this in
  //2.match all stings that start with an a and end in a b
  var matched = str.match(/(a[c-z]{3}b|b[c-z]{3}a)/gi);
  return matched !== null ? true : false;
};

console.log(ABCount("adhfb")); //true
console.log(ABCount("adbshdjashsb")); //true
console.log(ABCount("apfbmatchedb")); //false
console.log(ABCount("bmxxa")); //false