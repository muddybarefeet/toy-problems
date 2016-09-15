/*count the minutes between two times
Input = "12:30pm-00:00am"Output = 690
Input = "1:23am-1:08am"Output = 1425
*/

var get24HourTime = function (time) {
  //return the 24 hr time
  if (time.substr(time.length-2,2) === "am" || time.substr(time.length-2,2) === "pm" && time.substr(0,2) === "12") {
    return time;
  }
  //else convert to 24 hour
  var hour = time.split(':')[0];
  var twentyFourHour = parseInt(hour,10) + 12;
  return twentyFourHour + ":" + time.substring(3,5);
};

var convertToMins = function (hour) {
  return hour*60;
};

var countMins = function (diff) {
  //first extract times
  var times = diff.split("-");

  var timeOne = get24HourTime(times[0]);
  var timeTwo = get24HourTime(times[1]);

  //now get the time difference!
  var timeOneHour = parseInt(timeOne.substr(0,2),10);
  var timeTwoHour = parseInt(timeTwo.substr(0,2),10);

  var hourOneToMins = (timeOneHour*60) + parseInt(timeOne.substr(2,2),10);
  var hourTwoToMins = (timeTwoHour*60) + parseInt(timeTwo.substr(2,2),10);

  //1. time in numbers is before the other just minus one from other
  if (timeOneHour < timeTwoHour) {
    //fnd the difference
    return hourTwoToMins - hourOneToMins;
  } else {
  //2. span a day so get start diff to 24 AND get diff of second from 0 and then add
    return (24*60 - hourOneToMins) + hourTwoToMins;
  }
};

console.log(countMins("1:23am-1:08am"));