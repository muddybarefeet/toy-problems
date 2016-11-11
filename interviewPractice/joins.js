
//method to join data from two or more tables 


//1. JOIN or INNER JOIN -- show all that match from both cols in the col specified to join on
// 2. OUTER JOIN

//    2.1 LEFT OUTER JOIN or LEFT JOIN -- all from the left table and any matches from the right
//    2.2 RIGHT OUTER JOIN or RIGHT JOIN -- all from right plus any matches from the left
//    2.3 FULL OUTER JOIN or FULL JOIN --- combines left join and right join into one. return where neither value are met.

// 3. NATURAL JOIN --- most dont support but removes duplicate cols
// 4. CROSS JOIN --- cartisian product: the product of two sets: the product of set X and set Y is the set that contains all ordered pairs ( x, y ) for which x belongs to X and y belongs to Y.
// 5. SELF JOIN --- join of a table to itself


var indexObj = function (arr) {

  var result = {};
  arr.forEach(function (item,index) {
    if (result[item]) {
      result[item] = index;
    } else {
      result[item] = [index];
    }
  });
  return result;

};


var mergeTable = function (mergeType, left, right) {
  var secondInput;
  var colToMergeTo;

  if (mergeType === "right") {
    secondInput = indexObj(left);
    colToMergeTo = right;
  } else {
    secondInput = indexObj(right);
    colToMergeTo = left;
  }

  var result = [];
  colToMergeTo.forEach(function (element, index) {

    if (mergeType === "left") {

      if (!secondInput[element]) {
        result.push([index, -1]);
      } else {
        secondInput[element].forEach(function (item, i) {
          result.push([index, item]);
        });
      }

    } else if (mergeType === "right") {

      if (!secondInput[element]) {
        result.push([-1, index]);
      } else {
        secondInput[element].forEach(function (item, i) {
          result.push([item, index]);
        });
      }

    } else {

      if (secondInput[element]) {
        secondInput[element].forEach(function (item, i) {
          result.push([index, item]);
        });
      }

    }

  });
  return result;

};

console.log(mergeTable('right', ["apple","grape","pear","plum"],["apple","grape","pear","blueberry"]))
