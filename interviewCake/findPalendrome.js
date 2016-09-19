//Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome ↴

var isPanendrome = function (str) {
  //if even length then get the middle two chars
  if (str.length % 2 === 0) {
    var leftMid = str.length/2;
    return checkSides(str,leftMid,leftMid - 1);
  } else {
    //odd then take the middle char
    var mid = Math.floor(str.length/2);
    return checkSides(str,mid-1,mid+1);
  }
};

var checkSides = function (str, leftMid, rightMid) {
  while (leftMid >= 0) {
      if (str[leftMid]===str[rightMid]) {
        leftMid--;
        rightMid++;
      } else {
        return false;
      }
    }
    return true;
};

// console.log(isPanendrome("civic",1,3));

//find if a word could be a palendrome

var couldBePalendrome = function (str) {
  
  var unpariedChars = new Set();
  for (var i = 0; i < str.length; i++) {
    if (unpariedChars.has(str[i])) {
      unpariedChars.delete(str[i]);
    } else {
      unpariedChars.add(str[i]);
    }
  }
  if (str.length%2 === 0) {
    return unpariedChars.size === 0 ? true : false;
  }
  return unpariedChars.size === 1 ? true : false;

};

console.log(couldBePalendrome("hihii"));
