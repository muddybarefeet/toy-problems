//number of ways taking 1 or two steps to reach the top of a flight of stairs

var stairs = function (numOfStairs) {
  var total = 0;
  var options = [1,2];
  var inner = function (stairsLeft) {
    if (stairsLeft === 0) {
      total++;
      return;
    }
    if (stairsLeft < 0) return;

    for (var i = 0; i < options.length; i++) {
      inner(stairsLeft - options[i]);
    }

  };
  inner(numOfStairs);
  return total;
};

console.log(stairs(2));