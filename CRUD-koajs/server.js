'use strict'

var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router

    .get('/', function(ctx, next) {
        ctx.body = 'Hello World!';
    })
    .post('/user', function(ctx, next) {
        ctx.body = "Test 1";
        // ... 
    })
    .put('/user/:id', function(ctx, next) {
        ctx.body = "Test 2";
        // ... 
    })
    .del('/user/:id', function(ctx, next) {
        ctx.body = "Test 3";
        // ... 
    })
    .all('/user/:id', function(ctx, next) {
        ctx.body = "Test 4"; // ... 
    });

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);