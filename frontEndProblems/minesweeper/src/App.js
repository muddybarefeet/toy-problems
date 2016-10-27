import React, { Component } from 'react';
import './App.css';

const isBombPlaced = function () {
  if (Math.random()<0.2) return true;
  return false;
};

const calNumbers = function (board) {
  return board.map(function (row,rowIndex) {
    return row.map(function (cell, index, wholeRow) {
      if (cell.isBomb === false) {
        //look at all surrounding cells (8 cells)
        var count = 0;
        if (wholeRow[index-1] && wholeRow[index-1].isBomb) count++;
        if (wholeRow[index+1] && wholeRow[index+1].isBomb) count++;
        if (board[rowIndex-1] && board[rowIndex-1][index] && board[rowIndex-1][index].isBomb) count++;
        if (board[rowIndex-1] && board[rowIndex-1][index-1] && board[rowIndex-1][index-1].isBomb) count++;
        if (board[rowIndex-1] && board[rowIndex-1][index+1] && board[rowIndex-1][index+1].isBomb) count++;
        if (board[rowIndex+1] && board[rowIndex+1][index] && board[rowIndex+1][index].isBomb) count++;
        if (board[rowIndex+1] && board[rowIndex+1][index-1] && board[rowIndex+1][index-1].isBomb) count++;
        if (board[rowIndex+1] && board[rowIndex+1][index+1] &&  board[rowIndex+1][index+1].isBomb) count++;
        cell.surroundingBombs = count;
      }
      return cell;
    });
  });
};

const makeBoard = function (size) {
  // in this game there will be one bomb for every line
  var board = [];
  for (var i = 0; i < size; i++) {
    var row = [];
    for (var j = 0; j < size; j++) {
      row.push({
        clicked: false,
        isBomb: isBombPlaced(),
        surroundingBombs: 0
      })
    }
    board.push(row);
  }

  //sort out how many bombs around each cell
  return calNumbers(board);
};



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: makeBoard(7)
    };
  }

  render() {
    console.log(this.state.board)
    return (
      <div className="App">
        <h1>Minesweeper</h1>

      </div>
    );
  }
}

export default App;
