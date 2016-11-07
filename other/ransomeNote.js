

var ransomeNote = function (magazine, note) {
    
  //1. make an object of the note (letters = key, count = number)
    var obj = {};
    var lengthCheck;

    for (var i = 0; i < note.length; i++) {
      if (obj[note[i]]) {
        obj[note[i]]++;
      } else {
        obj[note[i]] = 1;
      }
    }

    lengthCheck = Object.keys(obj).length;

  //2. loop through the magazine string and each time a letter is found see if it is in the object (decrement value if found)
    for (var j = 0; j < magazine.length; j++) {
      if (obj[magazine[j]] && obj[magazine[j]] === 1) {
        delete obj[magazine[j]];
        lengthCheck -= 1;
        if (lengthCheck === 0) return true;
      } else if (obj[magazine[j]] && obj[magazine[j]] > 1) {
        obj[magazine[j]]--;
      }
    }

    return false;
    
};

console.log(ransomeNote("Today is Sunday", "nay"));
console.log(ransomeNote("aba", "aa"));
console.log(ransomeNote("Today is Sunday", "nayyy"));
console.log(ransomeNote("Today is Sunday", "yys"));




