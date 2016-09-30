// You rank players in the game from highest to lowest score. 
// So far you're using an algorithm that sorts in O(nlgn)O(n\lg{n})O(nlgn) time, 
// but players are complaining that their rankings aren't updated fast enough. 
// You need a faster sorting algorithm.

// Write a function that takes:

// an array of unsortedScores
// the highestPossibleScore in the game
// and returns a sorted array of scores in less than O(nlgn) time.

var sortTopScores = function (arr, topScore) {
  var scoresFrequency = [];
  for (var i = 0; i < topScore.length; i++) {
    //loop through the array and for each see if in the array making and if so increment
    if (arr[i]) {
      scoresFrequency.push(parseInt(0,10));
    }
  }
  arr.forEach(function (score) {
    if (isNaN(scoresFrequency[score])) {
      scoresFrequency[score] = 1;
    } else {
      scoresFrequency[score] = scoresFrequency[score] + 1;
    }
  });

  var result = [];
  scoresFrequency.result(function (score,index) {
    if (score > 0) {
      result.push(index);
    }
  });
  return result;
};

console.log(sortTopScores([9,23,23,23,9,5,34,1,9],34));
