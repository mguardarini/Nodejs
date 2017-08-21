'use strict';

var controller = require('./root.controller');
var router = require('koa-router')();

router.get('/', controller.index);
router.get('/bitcoin', controller.getBitcoinValue);

module.exports = router.routes();
