import React, { Component } from 'react';
import update from 'react-addons-update';
import './App.css';

// const bomb = "images/Bomb.png";
// const empty = "./images/grass1.jpg";
// const flag = "./images/flag.png";

import bomb from './images/Bomb.png';
import empty from './images/grass1.jpg';
import flag from './images/flag.png';

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

  updateStateWithIndexesToUncover (arrayOfIndexes) {
    var newBoard = this.state.board.slice();
    for (var i = 0; i < arrayOfIndexes.length; i++) {
      var tuple = arrayOfIndexes[i];
      newBoard[tuple[0]][tuple[1]].clicked = true;
    }
    this.setState({
      board: newBoard
    });
  }

  handelCellClick (rowIndex, cell, cellIndex) {
    if ( (cell.isBomb === true && cell.clicked === false) || cell.surroundingBombs > 0) {
      //loop through - change the cell to clicked and has bomb, then re-render
      // var newBoard = update(this.state.board, {
      //   [rowIndex]: {
      //       [cellIndex]: {
      //         clicked: {
      //           $set: true
      //         }
      //       }
      //     }
      // });
      var newBoard = this.state.board.map( (row) => {
        return row.map( (cell) => {
          if (cell.isBomb === true) {
            cell.clicked = true;
          }
          return cell;
        });
      });

      this.setState({
        board: newBoard
      });
    } else {
 
      //this.recurseAndUncoverEmpties(rowIndex, cellIndex);
    }
  }

  image (indexRow, indexCell) {
    if (this.state.board[indexRow][indexCell].clicked !== true) {
      return null;
    }
    if (this.state.board[indexRow][indexCell].isBomb === true) {
      return (<img style={{width:"40px"}} src={bomb} alt="empty cell" />);
    }
    if (this.state.board[indexRow][indexCell].surroundingBombs > 0) {
      return this.state.board[indexRow][indexCell].surroundingBombs;
    }
    if (this.state.board[indexRow][indexCell].surroundingBombs === 0) {
      return (<img style={{width:"40px"}} src={empty} alt="empty cell" />);
    }
  }

  render() {
    var board = this.state.board.map( (row, indexRow) => {
      var cells = row.map( (cell, indexCell) => {
        //image is either null/bomb/empty
        var image = this.image(indexRow, indexCell);
        return (<td key={indexCell} onClick={this.handelCellClick.bind(this, indexRow, cell, indexCell)}>{image}</td>);
      });
      return (<tr key={indexRow}>{cells}</tr>);
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
