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

var processInput = function (arr) {
  var result = "";
  if (arr.length === 0) return "";
  result += arr[0];
  for (var i = 0; i < arr.length-1; i++) {
    if (parseInt(arr[i],10)%2 === 0 && parseInt(arr[i+1],10)%2 === 0 && parseInt(arr[i],10) > 0 && parseInt(arr[i+1],10) > 0) {
      result = result + "*" + arr[i+1];
    } else if (parseInt(arr[i],10)%2 !== 0 && parseInt(arr[i+1],10)%2 !== 0 && parseInt(arr[i],10) > 0 && parseInt(arr[i+1],10) > 0) {
      result = result + "-" + arr[i+1];
    } else {
      result = result + arr[i+1];
    }
  }
  process.stdout.write(result);
};