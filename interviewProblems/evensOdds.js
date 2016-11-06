//* between evens and - between odds
// 0 is not an even or an odd number

process.stdin.resume();
process.stdin.setEncoding('utf8');

var stdin = '';
process.stdin
.on('data', function (chunk) {
    lines = chunk.split("\n");
    lines.forEach(function (line) {
        if (line.length) stdin = stdin + line;
    });
})
.on('end', function() {
    processInput(stdin);
});

var processInput = function (str) {
  var result = "";

  //imrovement would be to make str an array, map through and make all items numbers then removes some of the clutter  
  
  if (str.length === 0) return "";
  result += str[0];
  for (var i = 0; i < str.length-1; i++) {
    if (parseInt(str[i],10)%2 === 0 && parseInt(str[i+1],10)%2 === 0 && parseInt(str[i],10) > 0 && parseInt(str[i+1],10) > 0) {
      result = result + "*" + str[i+1];
    } else if (parseInt(str[i],10)%2 !== 0 && parseInt(str[i+1],10)%2 !== 0 && parseInt(str[i],10) > 0 && parseInt(str[i+1],10) > 0) {
      result = result + "-" + str[i+1];
    } else {
      result = result + str[i+1];
    }
  }
  process.stdout.write(result);
};

