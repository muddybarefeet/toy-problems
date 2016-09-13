/*all the letters move on one place in the alphabet and cap vowels*/

var increaseLetterCapVowel = function (str) {
  //match any letters and move on by one letter
  return str.replace(/[a-z]/ig, function (matched) {
    var newChar = "";
    if (matched === "Z" || matched === "z") {
      newChar = "a";
    } else {
      newChar = String.fromCharCode(matched.charCodeAt(0)+1).toLowerCase();
    }
    //test returns true/false
    if (/[aeiuo]/.test(newChar)) newChar = newChar.toUpperCase();
    return newChar;
  });
};

console.log(increaseLetterCapVowel("z"));