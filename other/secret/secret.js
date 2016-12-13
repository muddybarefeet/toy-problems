/*jshint esversion: 6 */

/*
Your job is to implement Promises.
There's a test suite in test.js to keep you on track.

The specs get exponentially more difficult. Expect that, and
may the JSForce be with you.

The answers are in answer.js--don't look at them until you've
finished. I removed the code you'll need to make the last spec
pass... consider that to be 'ninja mode'.
*/


//you'll want this...
const EventEmitter = require('events');

//all you from here on...
var Secret = function(cb){

  if(typeof cb !== "function") throw "Secrets must be passed a callback";

  return {
    then: function (data) {
      //some things
    },
    catch: function (data) {
      //some things
    }
  };

};

module.exports = Secret;
