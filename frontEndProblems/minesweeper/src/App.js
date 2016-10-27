import React, { Component } from 'react';
import './App.css';

const bomb = "./images/bomb.png";
const empty = "./images/grass1.jpg";
const flag = "./images/flag.png";

const isBombPlaced = function () {
  if (Math.random()<0.2) return true;
  return false;
};

const callNumbers = function (board) {
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
  return callNumbers(board);
};


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: makeBoard(7)
    };
  }

  handelCellClick (cell) {
    if (cell.isBomb) {
      //loop through - change the cell to clicked and has bomb, then re-render
    } else {
      //reveal the cell - if the cell has numbers then show number else show empty image
    }
  }

  render() {
    var board = this.state.board.map( (row, indexRow) => {
      var cells = row.map( (cell, indexCell) => {
        return (<td key={indexCell}></td>);
      });
      return (<tr key={indexRow} onClick={this.handelCellClick.bind(this, cell)}>{cells}</tr>);
    });
    return (
      <div className="container">
        <h1>Minesweeper</h1>
        <table className="table-bordered">
          <tbody>
            {board}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
