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

console.log(stairs(6));

//------------------------------------------------------------
//memoized version

var finalAnswer = (function () {

  var memoised = {};

  return function stairsMem (num) {
    if (memoised[num]) {
      return memoised[num];
    }
    if (num === 0) return 1;
    if (num < 0) return 0;
    var options = [1,2];
    memoised[num] = stairsMem(num - options[0]) + stairsMem(num - options[1]);
    return memoised[num];
  };

})();


console.log(finalAnswer(6));






