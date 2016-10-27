// var a = new Vector([1,2,3]);
// var b = new Vector([3,4,5]);
// var c = new Vector([5,6,7,8]);
// a.add(b); // should return Vector([4,6,8])
// a.subtract(b); // should return Vector([-2,-2,-2])
// a.dot(b); // should return 1*3+2*4+3*5 = 26
// a.norm(); // should return sqrt(1^2+2^2+3^2)=sqrt(14)
// a.add(c); // throws an error


var Vector = function (components) {
  // TODO: Finish the Vector class.
  this.value = components;

};

Vector.prototype.add = function (obj) {
  if (this.value.length !== obj.value.length) throw new Error();
  var that = this;
  return {
    equals: function () {
      return that.value.map(function (item, i) {
        return item + obj.value[i];
      });
    }
  };
};

Vector.prototype.subtract = function (obj) {
  if (this.value.length !== obj.value.length) throw new Error();
  var that = this;
  return {
    equals: function () {
      return that.value.map(function (item, i) {
        return item - obj.value[i];
      });
    }
  };
};

Vector.prototype.dot = function (obj) {
  if (this.value.length !== obj.value.length) throw new Error();
  return this.value
  .map(function (item, i) {
    return item * obj.value[i];
  })
  .reduce(function (prev, curr) {
    return prev+curr;
  }, 0);
};

Vector.prototype.norm = function () {
  return Math.sqrt(this.value
  .map(function (item) {
    return item*item;
  })
  .reduce(function (prev, curr) {
    return prev+curr;
  }, 0));
};

Vector.prototype.equals = function (obj) {
  if (this.value.length !== obj.value.length) return false;
  if (this.value[0] !== obj.value[0]) return false;
  return true;
};

Vector.prototype.toString = function () {
  return "(" + this.value.join(",") + ")";
};