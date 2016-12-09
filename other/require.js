//implement the require function

var myFancyMemory = {
  /*



  */
};

var myFancyFunction = function(){

};

module.exports = myFancyFunction;

/////////////////////////////////////////

var importedModule = require('../myFancyFunction.js');

var require = function(filePath){

  var fs = require('fs');

  var javascript = fs.readFile(filePath);

  javascript = "function(){\n" + javascript;

  javascript += "return module.exports;\n}();";

  return new Function(javascript)();

};


