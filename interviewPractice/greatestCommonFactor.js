
var gcd = function (a,b) {
  //find saller irrelevant if one is negative
  var smaller = Math.abs(a) < Math.abs(b) ? Math.abs(a) : Math.abs(b);
  var current = smaller;
  
  while (current > 1) {
    if (a%current === 0 && b%current === 0) {
      return current;
    }
    current--;
  }

  return 1;

};

console.log(gcd(-44,30));