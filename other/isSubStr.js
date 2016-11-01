//see if a string is a substring of another

var isSubStr = function (str, subStr) {
  var matches = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === subStr[0]) {
      matches.push(str.substr(i,subStr.length));
    }
  }
  for (var k = 0; k < matches.length; k++) {
    if (matches[k] === subStr) {
      return true;
    }
  }
  return false;
};

// ---- different solution
var isSubStr2 = function (str, subStr) {
  var matches = [];
  if (str.match(subStr) !== null) return true;
  return false;
};

console.log(isSubStr2('annannnannna', 'an'));
console.log(isSubStr2('annannnannna', 'b'));
