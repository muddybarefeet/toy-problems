function LCS(x, y) {

  //make both lower case as both arguments will be strings
  var inputOne = x.toLowerCase();
  var inputTwo = y.toLowerCase();
  var result = "";
  
  var currentIndex = -1;
  
  for (var i=0; i<inputTwo.length; i++) {
    for (var k=0; k<inputOne.length; k++) {
      if (inputTwo[i] === inputOne[k] && k > currentIndex) {
        result+=inputTwo[i];
        currentIndex = k;
        console.log(currentIndex)
        break;
      }
    }
  }
  
  return result;
}

console.log(LCS("annarocks","rocks"));

