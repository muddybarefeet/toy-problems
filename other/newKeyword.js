
var Penguin = function (height) {
  this.height = height;
  return this;//<---- added by new keyword
};

Penguin.prototype.bark = function(){
 console.log('woof!',this);
 return "woof!";
};

console.log(new Penguin(10));
var p = Penguin.bind(Object.create(Penguin.prototype))(10);


console.log(p);
