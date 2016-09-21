/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */


var commonChars = function (str1, str2) {
  var seen = {};
  var returnStr = "";
  for (var i=0; i<str1.length; i++) {
    if (!seen[str1[i]] && str1[i] !== " " && str2.indexOf(str1[i]) !== -1) {
      returnStr += str1[i];
    }
  }
  return returnStr;
};

// console.log(commonChars('acexivou', 'aegihobu'));

//more then 2 inputs --------

var findDups = function (obj1, obj2) {
  var hash = {};
  for (var i = 0; i < obj2.length; i++) {
    if (obj1[obj2[i]]) {
      hash[obj2[i]] = true;
    }
  }
  return hash;
};

var objectify = function (str) {
  var obj = {};
  var arr = str.join("").split('');
  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true;
    }
  }
  return obj;
};

var commonChars2 = function () {
  var inital = Array.prototype.slice.call(arguments,0,1);
  var otherObjects = Array.prototype.slice.call(arguments,1);

  //make hash of all other letters that are shared
  var common = otherObjects.reduce(function (obj, current) {
    return findDups(obj,current);
  },objectify(inital));
  console.log('--',common);
  //then loop through the first string and keep all that are in the hash
  var result = "";
  for (var i = 0; i < inital[0].length; i++) {
    if (common[inital[0][i]]) {
      result += inital[0][i];
    }
  }
  return result;
};

console.log('<><>',commonChars2('acexiwwwvou', 'aegihobu','ebdaghsosdusdsdi'));