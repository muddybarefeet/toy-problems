//see if a string is a substring of another

var isSubStr = function (str, subStr) {
  var matches = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === subStr[0]) {
      matches.push(str.substr(i,subStr.length));
    }
  }
  for (var i = 0; i < matches.length; i++) {
    if (matches[i] === subStr) {
      return true;
    }
  }
  return false;
};

console.log(isSubStr('annannnannna', 'an'));
console.log(isSubStr('annannnannna', 'b'));
