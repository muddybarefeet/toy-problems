var options = {
  1: [1,2,4],
  2: [1,2,3,5],
  3: [2,3,6],
  4: [1,4,5,7],
  5: [2,4,5,6,8],
  6: [3,5,6,9],
  7: [4,7,8],
  8: [0,5,7,8,9],
  9: [6,8,9],
  0: [0,8]
};

function getPINs(observed) {
  
  var answer = [];
  
  var inner = function (input, result) {

    if (input.length === 0) {
      answer.push(result);
      return;
    }

    var inputCopy = input.slice();
    inputCopy.splice(0,1);
    var current = input[0];
    var currentOptions = options[current];

    for (var i = 0; i < currentOptions.length; i++) {
      inner(inputCopy, result + currentOptions[i].toString());
    }
   
  };
  inner(observed.split(""),"");
  
  return answer;
}

console.log('----',getPINs("11"));