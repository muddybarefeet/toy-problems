
var firstNonRepeatChar = function (str) {

  var seenNonRepeats = {};
  var dups = {};

  for (var i = 0; i < str.length; i++) {
    if (seenNonRepeats.hasOwnProperty(str[i])) {
      delete seenNonRepeats[str[i]];
      dups[str[i]] = true;
    }
    if (!dups.hasOwnProperty(str[i])) {
      seenNonRepeats[str[i]] = i;
    }
  }

  //have object of non repearts
  //loop through singles and return one with lowest value
  var minIndex = str.length;

  for (var key in seenNonRepeats) {
    if (seenNonRepeats[key] < minIndex) {
      minIndex = seenNonRepeats[key];
    }
  }

  return minIndex;

};

console.log(firstNonRepeatChar("annaisisiscool"));