
function keyObj (arr) {
  var result = {};
  for (var i = 0; i < arr.length; i++) {
    if(result[arr[i]]) {
      result[arr[i]].push(i);
    } else {
      result[arr[i]] = [i];
    }
  }
  return result;
};

function match(matchtype, left, right) {
  
  var hashSideIndexes;
  var matchSide;
  //find out which side matches
  if (matchtype === "left") {
    hashSideIndexes = keyObj(right);
    matchSide = left;
  } else {
    hashSideIndexes = keyObj(left);
    matchSide = right;
  }

  var result = [];
  matchSide.forEach(function (item, index) {
    if (matchtype === "left") {
      if (!hashSideIndexes[item]) {
        result.push([index, -1]);
      } else {
        var matchIndexes = hashSideIndexes[item];
        matchIndexes.forEach(function (element) {
          result.push([index, element]);
        });
      }
    } else if (matchtype === "right") {
      if (!hashSideIndexes[item]) {
        result.push([-1, index]);
      } else {
        var matchIndexes = hashSideIndexes[item];
        matchIndexes.forEach(function (element) {
          result.push([element, index]);
        });
      }
    } else {

      if (hashSideIndexes[item]) {
        hashSideIndexes[item].forEach(function (element) {
          result.push([element, index]);
        });
      }

    }
  });

  return result;

};


console.log(match("left", ["apple", "grape", "grape","melon"], ["grape","lemon","apple"]));
console.log(match("inner", ["apple", "grape", "melon"], ["kiwi","pear"]));

