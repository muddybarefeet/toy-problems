function checkRows (board) {
  for (var i=0; i<board.length; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== 0) {
      return board[i][0] === 1 ? 1 : 2;
    }
  }
  return -1;
}

function checkCols (board) {
  for (var i=0; i<board.length; i++) {
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== 0) {
      return board[0][i] === 1 ? 1 : 2;
    }
  }
  return -1;
}

function checkDiags (board) {
  if (board[0][0] === 0 && board[0][2] === 0) return -1;
  var left = board[0][0] === 1 ? 1 : 2;
  var right = board[0][2] === 1 ? 1 : 2;
  var diagonal;
  
  if (board[1][1] === left) diagonal=left;
  if (board[1][1] === right) diagonal=right;
  if (diagonal === undefined) return -1;
  if (board[2][0] === diagonal) {
    return diagonal;
  }
  if (board[2][2] === diagonal) {
    return diagonal;
  }
}

function isSolved(board) {
   if (checkRows(board) > 0) {
     return checkRows(board) === 1 ? 1 : 2;
   };
   if (checkCols(board) > 0) {
     return checkRows(board) === 1 ? 1 : 2;
   };
   if (checkDiags(board) > 0) {
     return checkDiags(board) === 1 ? 1 : 2;
   };
   return -1;
}