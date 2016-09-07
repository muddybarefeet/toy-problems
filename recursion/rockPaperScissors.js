/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (num) {

  var paper = [];
  var options =["rock","paper","scissors"];

  var returnVal = [];

  var inner = function (roundNumber,paper) {
    
    if (roundNumber == num) {
      console.log('paper',paper);
      returnVal.push(paper);
      return;
    }

    for (var i=0; i<options.length; i++) {
      var newPaper = paper.slice();
      newPaper.push(options[i]);
      inner(roundNumber+1,newPaper);
    }

  };

  inner(0,[]);

  return returnVal;

};

// console.log(rockPaperScissors(3));

//different form of recusion

var rpsGoogleDoc = function (round, googleDoc) {

  googleDoc = googleDoc || [];
  var options =["rock","paper","scissors"];

  if (round !== 0) {
    for (var i=0; i<options.length; i++) {
      var newDoc = googleDoc.slice();
      newDoc.push(options[i]);
      rpsGoogleDoc(round-1,newDoc);
    }
  } else {
    return googleDoc;
  }

};

console.log(rpsGoogleDoc(3));
