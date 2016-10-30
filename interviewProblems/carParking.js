//park car in car park
//inital cost = 2 on entry
//first hour (or partial) = 3
//subsequent hours (or partial) = 4 per hour
//input times = "HH:MM"

function timeInMins (timeStr) {
    
    var timeArr = timeStr.split(":");
    var hoursInMins = parseInt(timeArr[0],10)*60;
    var mins = parseInt(timeArr[1],10);
    return hoursInMins + mins;   
}

function solution(E, L) {
    // write your code in JavaScript (Node.js 6.4.0)
    var startInMins = timeInMins(E);
    var endInMins = timeInMins(L);
    
    var timeParked = endInMins - startInMins;
    var hoursPassed = Math.ceil(timeParked/60);
    
    var baseCost = 2;
    
    if (hoursPassed <= 1){
        return baseCost + (hoursPassed*3);
    }
    
    var hoursLeftToCalc = hoursPassed - 1;
    return baseCost + 3 + (hoursLeftToCalc * 4);
    
}