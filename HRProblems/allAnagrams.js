/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function (str) {

  var options = str.split("");
  var result = [];
  var inner = function (strMaking, lettersLeft) {
    if (lettersLeft.length === 0) {
      result.push(strMaking);
      return;
    }
    for(var i=0; i<lettersLeft.length; i++) {
      var newCopy = strMaking.slice();
      newCopy += lettersLeft[i];
      //remove letter just used
      var newLetters = lettersLeft.slice();
      newLetters.splice(i,1);
      inner(newCopy, newLetters);
    }
  };
  inner("",options);
  return result;
};

var anagrams = allAnagrams('abc');
console.log(anagrams);