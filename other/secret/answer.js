const EventEmitter = require('events');

var Secret = function(cb){

  if(Object.prototype.toString.call(cb) !== '[object Function]'){
    throw new Error('Secrets must be passed a callback');
  }

  this._emitter = new EventEmitter();
  this._settledValue = null;
  this._settledError = null;
  this._safe = false;

  cb(this._resolve.bind(this), this._reject.bind(this));

};

Secret.prototype.catch = function(cb) {

  this._safe = true;
  this._emitter.on('reject', function(){
    cb(this._settledError);
  }.bind(this));

};

Secret.prototype.then = function(cb) {

  this._emitter.on('resolve', function(){
    this._settledValue = cb(this._settledValue);
  }.bind(this));

  return this;

};

Secret.prototype._resolve = function(data) {

  this._settledValue = data;
  this._emitter.emit('resolve');

};

Secret.prototype._reject = function(err) {

  if(this._safe === false){
    throw new Error("Unhandled rejection error");
  }

  this._settledError = err;
  this._emitter.emit('reject');

};

module.exports = Secret;
