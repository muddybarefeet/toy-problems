/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */

 var asyncMap = function (tasks, fn) {
  //trigger functions in input arr
  var counter = 0;
  var results = [];

  //forEach through tasks and for each one pass in a custom fn that 
  //increments the counter and adds result to the results and only when full returns
  tasks.forEach(function (task,i) {
    task(function (val) {
      counter++;
      results[i] = val;
      if (counter === tasks.length) fn(results);
    });
  });

 };

asyncMap([
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 200);
  },
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 100);
  }
 ],
  function(results){
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log('here',results); // ['one', 'two']
 });

