
var mocha = require('mocha'); //access the mocha library
var expect = require('chai').expect; //access to the chai function expect
var binarySearch = require('./binarySearchArray.js'); //way to install my deepEquals file

describe('binarySearch',function() {

  it('shoud return the index of the target given', function() {
    expect(binarySearch([1,3,4,9,12,16,21,50,99], 4)).to.equal(2);
    expect(binarySearch([22,43,66,86,111,324,444,511,600,750,897,22734], 22734)).to.equal(11);
  });

  it('should return null if the index is not found', function() {
    expect(binarySearch([1,3,4,9,12,16,21,50,99], 100)).to.equal(null);
  });

  it('should return null if the input array is empty', function() {
    expect(binarySearch([], 100)).to.equal(null);
  });

  it('should return an index when the input has one element and that element matches the target', function() {
    expect(binarySearch([44], 44)).to.equal(0);
  });

});