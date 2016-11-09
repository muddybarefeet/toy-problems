

// //Write a class TempTracker with these methods:

// insert()—records a new temperature
// getMax()—returns the highest temp we've seen so far
// getMin()—returns the lowest temp we've seen so far
// getMean()—returns the mean ↴ of all temps we've seen so far
// getMode()—returns the mode ↴ of all temps we've seen so far
// Optimize for space and time. Favor speeding up the getter functions (getMax(), getMin(), getMean(), and getMode()) over speeding up the insert() function.


var TempTracker = function () {

    this.max = 0;
    this.min = 111;

    //mean
    this.totalTemps = 0;
    this.sumTemps = 0;

    //mode
    this.frequency = {};
    // if there is more than one mode return any
    this.mode = {
        temp:0,
        count:0
    }; //0th = temp, 1st = freq
};

TempTracker.prototype.insert = function (temp) {
    if (temp > this.max) this.max = temp;
    if (temp < this.min) this.min = temp;
    //for calculating the mean
    this.sumTemps += temp;
    this.totalTemps += 1;
    //for calc mode
    if (this.frequency[temp]) {
        this.frequency[temp]++;
    } else {
        this.frequency[temp] = 1;
    }
    if (this.frequency[temp] > this.mode[1]) {
        this.mode.temp = temp;
        this.mode.count = this.frequency[temp];
    }
};

TempTracker.prototype.getMax = function () {
    return this.max;
};

TempTracker.prototype.getMin = function () {
    return this.min;
};

TempTracker.prototype.getMean = function () {
    return this.sumTemps/this.totalTemps;
};

TempTracker.prototype.getMoetMode = function () {
    return this.mode.temp;
};