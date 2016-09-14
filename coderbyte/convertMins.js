/*convert minutes into hours and mins*/

var minutes = 60;
var mins2 = 110;

var covertMins = function (time) {
  //take mins and return mins and seconds
  var hours = Math.floor(time/60);
  var mins = time % 60;
  return hours+":"+mins;
};

console.log(covertMins(110));