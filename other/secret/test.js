var mocha = require('mocha'),
    chai = require('chai'),
    expect = chai.expect,
    should = chai.should,
    fs = require('fs');

const Secret = require('./secret.js');

describe('Secret', function(){

  describe('api', function(){

    it('should require a callback', function(){

      var secretMaker = function(){
        return new Secret(25);
      };

      expect(secretMaker).to.throw('Secrets must be passed a callback');

    });

    it('should have a .then method', function(){

      var secretMaker = function(){
        return new Secret(function(resolve, reject){

        })
        .then(function(data){
          //do stuff
        });
      };

      expect(secretMaker).to.not.throw('(intermediate value).then is not a function');

    });

    it('should have a .catch method', function(){

      var secretMaker = function(){
        return new Secret(function(resolve, reject){

        })
        .catch(function(data){
          //do stuff
        });
      };

      expect(secretMaker).to.not.throw('(intermediate value).catch is not a function');

    });

  });

  describe('basic functionality', function(){

    it('should allow basic then-ing and pass the correct data', function(done){

      var x = 10;

      new Secret(function(resolve, reject){

        fs.readdir(__dirname, function(err, data){
          if(err) return reject(err);
          return resolve(data);
        });

      })
      .then(function(data){
        x += data.length;
        expect(x).to.equal(13);
        done();
      });

    });

    it('should allow basic catching and pass the correct error', function(done){

      new Secret(function(resolve, reject){

        fs.readdir(__dirname+'xx', function(err, data){
          if(err) return reject(err);
          return resolve(data);
        });

      })
      .catch(function(err){
        expect(!!err.message.match('no such file or directory')).to.equal(true);
        done();
      });

    });

  });

  describe('chaining', function(){

    it('should allow basic chaining', function(done){

      var x = 10;

      new Secret(function(resolve, reject){

        fs.readdir(__dirname, function(err, data){
          if(err) return reject(err);
          return resolve(data);
        });

      })
      .then(function(data){
        x += data.length;
        return x;
      })
      .then(function(){
        x++;
        expect(x).to.equal(14);
        done();
      });

    });

    it('should allow basic chaining and passing the right data', function(done){

      var x = 10;

      new Secret(function(resolve, reject){

        fs.readdir(__dirname, function(err, data){
          if(err) return reject(err);
          return resolve(data);
        });

      })
      .then(function(data){
        x += data.length;
        return x;
      })
      .then(function(val){
        x = val + 1;
        expect(x).to.equal(14);
        done();
      });

    });

    it('should allow async chaining and passing the right data', function(done){

      var x = 10;

      new Secret(function(resolve, reject){

        fs.readdir(__dirname, function(err, data){
          if(err) return reject(err);
          return resolve(data);
        });

      })
      .then(function(data){
        x += data.length;
        return new Secret(function(resolve, reject){
          process.nextTick(function(){
            resolve(10);
          });
        });
      })
      .then(function(val){
        expect(x).to.equal(13);
        expect(val).to.equal(10);
        done();
      });

    });

  });

});
