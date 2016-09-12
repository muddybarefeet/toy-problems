///*If the element currently on is a letter put a plus either side of it*/

var insertPlus = function (str) {
  //take string and return new string
  var pattern = /[a-z]/ig;
  return str.replace(pattern, function (match){
    return "+"+match+"+";
  })
  .split("")
  .slice(1,-1)
  .join("");
};

// console.log(insertPlus("d 837 hs"));

//check if a string has each letter surrounded by a plus

var checkLetter = function (str) {

  for (var i=0; i<str.length; i++) {
    // console.log(str[i].match(/[a-z]+/ig))
    if (str[i].match(/[a-z]+/ig)) {
      if (str[i-1] !== "+" || str[i+1] !== "+") {
        return false;
      }
    }
  }
  return true;
};

console.log('check letter',checkLetter("+d+g"));