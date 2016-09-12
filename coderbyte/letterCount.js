
/*Using the JavaScript language, have the function LetterCountI(str) 
take the str parameter being passed and return the first word with the 
greatest number of repeated letters. For example: "Today, is the greatest 
day ever!" should return greatest because it has 2 e's (and 2 t's) and it 
comes before ever which also has 2 e's. If there are no words with 
repeating letters return -1. Words will be separated by spaces. */

var repeatsHave = function (hash) {
  var most = 0;
  for (var key in hash) {
    if (hash[key] > 1 && hash[key] > most) {
      most = hash[key];
    }
  }
  return most;
};


var greatestRepeats = function (str) {
  var word = {};
  var currentWord = "";
  var mostRepeats = -1;
  var wordWithMostRepeats = "";
  for (var i = 0; i < str.length; i++) {
    //if letter then a word and add to the word hash
    if (str[i].match(/[a-z]/gi)) {
      if (word[str[i]]) {
        word[str[i]]++;
      } else {
        word[str[i]] = 1;
      }
      currentWord += str[i];
    } else {
      //find the largest repeats in word and add
      var greatestRepeats = repeatsHave(word);
      if (greatestRepeats > 1 && greatestRepeats > mostRepeats) {
        wordWithMostRepeats = currentWord;
        mostRepeats = greatestRepeats;
        //reset for next word
        currentWord = "";
        word = {};
      }
    }
  }
  //remember to count the last word
  var repeats = repeatsHave(word);
  if (repeats > 1 && repeats > mostRepeats) {
    wordWithMostRepeats = currentWord;
    mostRepeats = repeats;
  }
  //return -1 if there is not any repeats
  return wordWithMostRepeats ? wordWithMostRepeats: mostRepeats;
};

console.log(greatestRepeats("aaa def ghiiiiiiiiii"));
