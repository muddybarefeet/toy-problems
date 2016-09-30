// Users on longer flights like to start a second movie right when their first one ends, 
// but they complain that the plane usually lands before they can see the ending. So you're 
// building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a function that takes an integer flightLength (in minutes) and an array of integers
//  movieLengths (in minutes) and returns a boolean indicating whether there are two numbers 
//  in movieLengths whose sum equals flightLength.

// When building your function:

// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory

// We can do this in O(n) time, where nnn is the length of movieLengths.

// Remember: your users shouldn't watch the same movie twice. Are you sure your 
// method won’t give a false positive if the array has one element that is half flightLength?

var flightMovies = function (flightLengthInMins, arrayOfMovieLengthsInMins) {
  var moviesSeen = {};

  for (var i = 0; i < arrayOfMovieLengthsInMins.length; i++) {
    var matchingLength = flightLengthInMins - arrayOfMovieLengthsInMins[i];
    if (moviesSeen.hasOwnProperty(matchingLength)) {
      return true;
    } else {
      moviesSeen[arrayOfMovieLengthsInMins[i]] = 1;
    }
  }

  return false;
};

console.log(flightMovies(110, [90,57,29,20,20,90]));