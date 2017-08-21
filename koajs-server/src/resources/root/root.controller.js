'use strict';


// Get list of roots
exports.index = function*(next) {
	this.status = 200;
  this.body = {
  	name : 'koajs-server',
  	info : 'API Docs URL'
  };
};

exports.getBitcoinValue = function*(next) {
	this.status = 200;
  this.body = {
  	name : 'koajs-server',
  	info : 'API Docs URL'
  };
};
