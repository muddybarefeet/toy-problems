import React, { Component } from 'react';
import update from 'react-addons-update';
import './App.css';

import bomb from './images/Bomb.png';
import empty from './images/grass1.jpg';
import flag from './images/flag.png';

const isBombPlaced = function () {
  if (Math.random()<0.1) return true;
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
        surroundingBombs: 0,
        isFlag:false
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
      board: makeBoard(15)
    };
  }

  recurseAndUncoverEmpties (rowIndex, cellIndex, board) {

    board[rowIndex][cellIndex].clicked = true;

   if (board[rowIndex][cellIndex].surroundingBombs > 0) {
      this.setState({
        board: board
      });
      return;
    }

    if (board[rowIndex][cellIndex+1] && board[rowIndex][cellIndex+1].isBomb === false && board[rowIndex][cellIndex+1].clicked === false) {
      this.recurseAndUncoverEmpties(rowIndex, cellIndex+1, board.slice());
    }
    if (board[rowIndex][cellIndex-1] && board[rowIndex][cellIndex-1].isBomb === false && board[rowIndex][cellIndex-1].clicked === false) {
      this.recurseAndUncoverEmpties(rowIndex, cellIndex-1, board.slice());
    }
    if (this.state.board[rowIndex-1] && this.state.board[rowIndex-1][cellIndex].isBomb === false && this.state.board[rowIndex-1][cellIndex].clicked === false) {
      this.recurseAndUncoverEmpties(rowIndex-1, cellIndex, board.slice());
    }
    if (this.state.board[rowIndex+1] && this.state.board[rowIndex+1][cellIndex].isBomb === false && this.state.board[rowIndex+1][cellIndex].clicked === false) {
      this.recurseAndUncoverEmpties(rowIndex+1, cellIndex, board.slice());
    }
    if (this.state.board[rowIndex+1] && this.state.board[rowIndex+1][cellIndex-1] && this.state.board[rowIndex+1][cellIndex-1].isBomb === false && this.state.board[rowIndex+1][cellIndex-1].clicked === false) {
      this.recurseAndUncoverEmpties(rowIndex+1, cellIndex-1, board.slice());
    }
    if (this.state.board[rowIndex+1] && this.state.board[rowIndex+1][cellIndex+1] && this.state.board[rowIndex+1][cellIndex+1].isBomb === false && this.state.board[rowIndex+1][cellIndex+1].clicked === false) {
      this.recurseAndUncoverEmpties(rowIndex+1, cellIndex+1, board.slice());
    }
    if (this.state.board[rowIndex-1] && this.state.board[rowIndex-1][cellIndex-1] && this.state.board[rowIndex-1][cellIndex-1].isBomb === false && this.state.board[rowIndex-1][cellIndex-1].clicked === false) {
      this.recurseAndUncoverEmpties(rowIndex-1, cellIndex-1, board.slice());
    }
    if (this.state.board[rowIndex-1] && this.state.board[rowIndex-1][cellIndex+1] && this.state.board[rowIndex-1][cellIndex+1].isBomb === false && this.state.board[rowIndex-1][cellIndex+1].clicked === false) {
      this.recurseAndUncoverEmpties(rowIndex-1, cellIndex+1, board.slice());
    }
    
  }

  handelCellClick (rowIndex, cell, cellIndex) {
    if (cell.isBomb === true && cell.clicked === false) {
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
    } else if (cell.clicked === false) {
      var board = this.state.board.slice();
      this.recurseAndUncoverEmpties(rowIndex, cellIndex, board);
    }
  }

  image (indexRow, indexCell) {
    if (this.state.board[indexRow][indexCell].clicked !== true) return null;
    if (this.state.board[indexRow][indexCell].isBomb === true) {
      return (<img style={{width:"40px"}} src={bomb} alt="bomb" />);
    }
    if (this.state.board[indexRow][indexCell].isFlag === true) {
      console.log('place flag', flag)
      return (<img style={{width:"40px"}} src={flag} alt="flag" />);
    }
    if (this.state.board[indexRow][indexCell].surroundingBombs > 0) {
      return this.state.board[indexRow][indexCell].surroundingBombs;
    }
    if (this.state.board[indexRow][indexCell].surroundingBombs === 0) {
      return (<img style={{width:"40px"}} src={empty} alt="empty" />);
    }
  }

  handelRightClick (rowIndex, cellIndex) {
    var eventEmitted = Array.prototype.slice.call(arguments,2,3)[0];
    eventEmitted.preventDefault();
    var flagBool = this.state.board[rowIndex][cellIndex].isFlag;
    if (this.state.board[rowIndex][cellIndex].clicked === false) {
      
      var newBoard = update(this.state.board, {
        [rowIndex]: {
            [cellIndex]: {
              isFlag: {
                $set: !flagBool
              }
            }
          }
      });
      
      this.setState({
        board: newBoard
      });
      console.log('done');
    }
  }

  render() {
    var board = this.state.board.map( (row, indexRow) => {
      var cells = row.map( (cell, indexCell) => {
        //image is either null/bomb/empty/flag
        var image = this.image(indexRow, indexCell);
        return (<td 
                  key={indexCell} 
                  onClick={this.handelCellClick.bind(this, indexRow, cell, indexCell)}
                  onContextMenu={this.handelRightClick.bind(this, indexRow, indexCell)}
                >{ image }</td>);
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
