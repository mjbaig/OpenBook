'use strict'

const Koa = require('koa');

const Router = require('koa-router');

let app = new Koa();

let router = new Router();

const port = 8080;

const env = process.argv[2];

router.get('/', (ctx, next) => {
	ctx.body = "Hello World";
});

app.on('error', (err, ctx) => {
	console.log('server error', err, ctx);
});

app
	.use(router.routes())
	.use(router.allowedMethods)
	.listen(port, () => {
		console.log(`Started application on ${port}`);
	});


module.exports = app;
