// //5 test cases failing

function maxDifference(a) {
    var currentLow = a[0];
    var currentHigh = a[0];
    var largestDiff = 0;

    //maybe include case if only one thing then no difference

    for (var i=0; i<a.length; i++) {
        //if current low more than current then reset high to current and set low to current
        if (a[i] < currentLow) {
            if (currentHigh - currentLow > largestDiff) largestDiff = currentHigh - currentLow;
            currentLow = a[i];
            currentHigh = a[i];
        } else if (currentHigh < a[i]) {
            changesMade = true;
            currentHigh = a[i];
        }
    }

    //should return 0 on being 0 diff?
    return largestDiff ? largestDiff : -1;
}


console.log(maxDiff([5]));


//----- second attempt

