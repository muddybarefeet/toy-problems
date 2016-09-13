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

console.log(isPanendrome("civic",1,3));