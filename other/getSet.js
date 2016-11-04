

var Penguin = function () {
  var superSecretHeight = 44;

  return {
    get: function () {
      return superSecretHeight;
    },
    set: function (newHeight) {
      superSecretHeight = newHeight;
      return superSecretHeight;
    }
  };

};

var a = Penguin();
a.set(55);
console.log(a.get());