// Create a function christmasTree(height) that returns a christmas tree of the correct height

// christmasTree(5) should return:

//     *    
//    ***   
//   *****  
//  ******* 
// *********


function christmasTree(height) {
  var rowNumbers = [];

  for (var i=1; i <= ((height)*2); i+=2) {
    rowNumbers.push(i);
  }

  var rowNumber = 1;
  var returnString = "";

  for (var k = 0; k < rowNumbers.length; k++) {
    var newString = " ".repeat(height - rowNumber) + "*".repeat(rowNumbers[k]) + " ".repeat(height - rowNumber);
    if (k+1 === rowNumbers.length) {
      returnString += newString;
    } else {
      returnString += newString + "\n";
    }
    rowNumber++;
  }

  return returnString;

}

console.log(christmasTree(1));