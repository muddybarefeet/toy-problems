//1. functional
//2. functional shared
//3. prototypical
//4. pseudoclassical


//1.

var Functional = function (name) {
  var result = {};
  result.name = name;
  result.printName = function () {
    console.log(name);
  };
  return result;
};

var instance = Functional("anna");
instance.printName();
console.log('functional',instance);


//2. 

var methods = {
  printName: function () {
    console.log(this.name);
  }
};

var FunctionalShared = function (name) {
  //line to add methods to current obj
  var result = Object.assign({},methods);
  result.name = name;
  return result;
};


var instance = FunctionalShared("anna");
instance.printName();
console.log('functional shared',instance);



//3. 

var Prototypal = function (name) {
  var results = Object.create(Prototypal.prototype);
  results.name = name;
  return results;
};

Prototypal.prototype.printName = function () {
  console.log(this.name);
};

var instance = Prototypal("anna");
instance.printName();
console.log('Prototypal', instance);

//4.

var Pseudoclassical = function (name) {
  this.name = name;
};

Pseudoclassical.prototype.printName = function () {
  console.log(this.name);
};


var instance = new Pseudoclassical("anna");
instance.printName();
console.log('Pseudoclassical: ',instance);
