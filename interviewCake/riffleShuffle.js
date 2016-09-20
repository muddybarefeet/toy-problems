//return bool if deck riffle shuffled or not

var riffleShuffled = function (half1, half2, shuffledDeck) {

  // loop thought the shuffled deck
  //if the current matches one of the options from forst or second half then move on else return false
  var firstHalfIndex = 0;
  var secondHalfIndex = 0;
  for (var i=0; i<shuffledDeck.length; i++) {
    if (shuffledDeck[i] === half1[firstHalfIndex]) {
      firstHalfIndex++;
    } else if (shuffledDeck[i] === half2[secondHalfIndex]) {
      secondHalfIndex++;
    } else {
      return false;
    }
  }

  return true;

};

