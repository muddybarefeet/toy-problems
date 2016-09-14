var data = [0, 1, 2];
var funcs = [];
function init() {
  for (var i = 0; i < 3; i++) {
    var x = data[i];
    var innerFunc = function() {
      return x;
    };
    funcs.push(innerFunc);
  }
}

function run() {
  for (var i = 0; i < 3; i++) {
    console.log(data[i] + ", " + funcs[i]());
  }
}

init();
run();


////////////////////////////////////////////////

function init () {

  var i, x, innnerFunc;

  for (i = 0; i < 3; i++) {
    x = data[i];
    innnerFunc = function(x) {
      return x;
    };
    funcs.push(innnerFunc);
  }
}

function run () {
  var i;
  for (i = 0; i < 3; i++) {
    console.log(data[i] + ", " + funcs[i]());
  }
}

var data, funcs;
data = [0, 1, 2];
funcs = [];

init();
run();