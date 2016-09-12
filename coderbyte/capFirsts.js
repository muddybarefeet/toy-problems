/*capitalise the first letter of each word*/

var capFirstLetters = function (str) {
  //take string and return string of words with the first letter capitalised
  return str.split(" ")
  .map(function (word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(" ");
};

console.log(capFirstLetters("heks shs sdha asdasdjasdh"));
console.log(capFirstLetters("heks shs sdha DHDGSKF jkHJSAKS"));