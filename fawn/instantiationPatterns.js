//1. Functional
var Functional = function (name) {
  var proto = {};
  proto.name = name;
  proto.add = function (a,b) {
    return a + b;
  };
  return proto;
};
var instance_functional = functional("anna");






//2. Functional Shared
var FunctionalShared = function (name) {
  var proto = {};
  proto.name = name;
  //use the underscore method to merge the external object of methods with one defined inside the class
  _.extend(proto, functionalShared_methods);
  return proto;
};
//methods on an external object
var functionalShared_methods = {};
functionalShared_methods.add = function (a,b) {
  return a+b;
};
var instance_funcShared = FunctionalShared("anna");





//3. Prototypical
var Prototypal = function (name) {
  var proto = Object.create(Prototypal.prototype);
  proto.name = name;
  return proto;
};
Prototypal.prototype.add = function (a,b) {
  return a + b;
};
var instance_prototypal = Prototypal("anna");




//4. Pseudoclassical
var Pseudoclassical = function (name) {
  this.name = name;
};
Pseudoclassical.prototype.add = function (a,b) {
  return a+b;
};
var instance_pseudoclassical = new Pseudoclassical("anna");


