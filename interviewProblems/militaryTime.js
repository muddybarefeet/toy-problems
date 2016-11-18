// Given a string that represents time in hours and minutes, convert the 
// string to military time (if necessary).
//
// time: "3:00pm"
// output: "15:00"
// 
// time: "12:00am"
// output: "00:00"
// 
// time: "04:00"
// output: "04:00"

// if pm except 12pm hours then need to re-calc hours
//if am 12 hours then --> 00 hours

/*
suffix: pm
timeArr = ["3","00"];

*/

var militaryTime = function (str) {
    
    //1. check length and return if already military
    if (str.length <= 5) {
        return str;
    }
    
    //2. slice the last two things off the str and make a variable
    var suffix = str.slice(-2).toLowerCase();
    //make array of time and check for 12 hours
    var timeArr = str.slice(0,-2).split(":");
    
    //if it is am and not 12 as the start numbers return with zero padding if needed
    if (suffix === "am") {
        //if 12 hours then reurn time with updated hours as 00
        if (parseInt(timeArr[0],10) !== 12) {
            //pad and return
            var hour = timeArr[0];
            if (timeArr[0].length > 1) {
                hour = "0" + timeArr[0]
            }
            return hour + ":" + timeArr[1];
            
        } else {
            return "00:" + timeArr[1]; 
        }
    }
        
    //if 12 at start and pm then just return
    if (parseInt(timeArr[0],10) === 12) {
        return timeArr.join(":");
    }
    
    //update hours (plus 12 and return str)
    return (parseInt(timeArr[0],10) + 12) + ":" + timeArr[1];
};
