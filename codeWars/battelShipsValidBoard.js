var board = [ 
  [ 1, 0, 0, 0, 0, 1, 1, 0, 0, 0 ],
  [ 1, 0, 1, 0, 0, 0, 0, 0, 1, 0 ],
  [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 0 ],
  [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
  [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
  [ 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ];

function checkForSingleLength (field, rowIndex, cellIndex) {

  if (field[rowIndex][cellIndex-1]) {
    if (field[rowIndex][cellIndex-1] !== 0) {
      return false;
    }
  }

  if (field[rowIndex][cellIndex+1]) {
    if (field[rowIndex][cellIndex+1] !== 0) {
      return false;
    }
  }

  if (field[rowIndex+1]) {
    if (field[rowIndex+1][cellIndex] !== 0) {
      return false;
    }
  }

  if (field[rowIndex-1]) {
    if (field[rowIndex-1][cellIndex] !== 0) {
      return false;
    }
  }

  return true;
}

function checkRight (board, rowIndex, cellIndex) {
  var shipLength = 0;
  var currentCellIndex = cellIndex;
  while (board[rowIndex][currentCellIndex] || board[rowIndex][currentCellIndex] === 1) {
    //check that the above or below is not 1 then the ship is invalid
    if ( (board[rowIndex-1] && board[rowIndex-1][currentCellIndex] === 1) || ( board[rowIndex+1] && board[rowIndex+1][currentCellIndex] === 1) ) {
      return false;
    }
    shipLength++;
    currentCellIndex++;
  }
  return shipLength;
}

function checkDown (board, rowIndex, cellIndex) {
  var shipLength = 0;
  var currentRowIndex = rowIndex;
  while (board[currentRowIndex][cellIndex] || board[currentRowIndex][cellIndex] === 1) {
    //check that the left or right is not 1 then the ship is invalid
    if ( ( board[currentRowIndex][cellIndex-1] && board[currentRowIndex][cellIndex-1] === 1 ) || ( board[currentRowIndex][cellIndex+1] && board[rowIndex][cellIndex+1] === 1 ) ) {
      return false;
    }
    shipLength++;
    currentRowIndex++;
  }
  return shipLength;
}

function validateBattlefield(field) {
  var ships = {
  //ship length: number on field decrement count when one found/remove if only one left
    4: 1,
    3: 2,
    2: 3,
    1: 4
  };
  //if one then loook around at the surrounding cells to see where a boat is and if valid
  for (var rowIndex = 0; rowIndex < field.length; rowIndex++) {
    // row.forEach(function (cell,cellIndex) {
    for (var cellIndex = 0; cellIndex < field.length; cellIndex++) {

      if (field[rowIndex][cellIndex] === 1) {

        //check first thing and not in the middle of a row
        if ( (field[rowIndex][cellIndex+1] && field[rowIndex][cellIndex+1] === 1) ) {
          if (field[rowIndex][cellIndex-1] && field[rowIndex][cellIndex-1] === 1) {
            // console.log('middle of ship do nothing');
          }
          //see how long the found ship is
          var right = checkRight(field, rowIndex, cellIndex);
          if (!right) return false;
          if (ships[right]) {
            if (ships[right] > 0) {
              ships[right]--;
              console.log(ships);
            } else {
              return false;
            }
          }
        } else if ( (field[rowIndex+1] && field[rowIndex+1][cellIndex] === 1) ) {
        //check cells below not need to check above as moving down the board and check one before not a 1 and in mid col
          if (field[rowIndex-1] && field[rowIndex-1][cellIndex] === 1) {
            // console.log('middle of ship do nothing');
          }
          var down = checkDown(field, rowIndex, cellIndex);
          if (!down) return false;
          if (ships[down]) {

            if (ships[down] > 0) {
              ships[down]--;
            } else {
              return false;
            }
          }
        } else {
          var isOne = checkForSingleLength(field, rowIndex, cellIndex);
          if (isOne) {
            if (ships[1] > 0) {
              ships[1]--;
            } else {
              return false;
            }
          }

        }

      }
    }
  }
  //if no ships left to find then true else false
  var isValid = true;
  for (var key in ships) {
    if (ships[key] !== 0) isValid = false;
  }
  return isValid;
}

var a = validateBattlefield(board);

console.log("answer: ",a);