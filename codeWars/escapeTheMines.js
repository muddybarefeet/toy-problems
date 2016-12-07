/*
var map = [[true, false],
    [true, true]];

solve(map, {x:0,y:0}, {x:1,y:1});
// Should return ['right', 'down']

*/

var makeVisited = function (mineMap) {
  return mineMap.map(function (row) {
    return row.map(function (square) {
      return false;
    });
  });
};

var possibleMoves = function (pos, map, visited) {
  var positions = [];
  //down one
  if (map[(pos.x) + 1] && map[(pos.x) + 1][pos.y]) {
    positions.push({x: (pos.x) + 1, y: pos.y, direction: "right"});
  }
  //up one
  if (map[(pos.x) - 1] && map[(pos.x) - 1][pos.y]) {
    positions.push({x: (pos.x) - 1, y: pos.y, direction: "left"});
  }

  //left one
  if (map[pos.x][(pos.y) - 1]) {
    positions.push({x: pos.x, y: (pos.y) - 1, direction: "up"});
  }
  //right one
  if (map[pos.x][(pos.y) + 1]) {
    positions.push({x: pos.x, y: (pos.y) + 1, direction: "down"});
  }

  //check new positions against visited matrix and only return those that have not yet been visited as possible positions
  return positions.filter(function (item) {
    if (!visited[item.x][item.y]) {
      return item;
    }
  });

};


var escapeTheMines = function (map, miner, exit, visited, moves) {

  //make board of visited positions
  visited = visited || makeVisited(map);
  moves = moves || [];

  //if current is the exit return moves so far
  if (exit.x === miner.x && exit.y === miner.y) {
    // console.log('moves to win!', moves);
    return moves;
  }

  //mark current position on the visited board
  visited[miner.x][miner.y] = true;

  //take current position and find out where can move to from here
  var validMoves = possibleMoves(miner, map, visited);

  if (validMoves.length === 0) {
    return;
  }

  //loop through positions and recurse on each
  var x = validMoves.map(function (position) {
    var latestMoves = moves.slice();
    latestMoves.push(position.direction);
    // delete position.direction;
    var a = escapeTheMines(map, position, exit, visited, latestMoves);
    if (a !== undefined) {
      return a;
    }
  })
  .filter(function(thing){
    return !!thing;
  });

  return denestify(x);

};

var denestify = function(nestedArray){
  return Array.isArray(nestedArray[0]) ? denestify(nestedArray[0]) : nestedArray;
};

// var map = [[true, false],[true, true]];
// var map = [[true], [true], [true], [true]];
var map = [[true, true, true, false, true],
    [false, false, true, false, true],
    [true, true, true, true, true],
    [true, false, true, false, false],
    [false, true, true, true, true]];
var m = escapeTheMines(map, {x:0,y:0}, {x:4,y:4});
console.log('??  ',m);



