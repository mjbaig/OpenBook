'use strict'

const Koa = require('koa');

const Router = require('koa-router');

let app = new Koa();

let router = new Router();

const port = 8080;

(async () => {
	try{

		router.get('/', (ctx, next) => {
			ctx.body = "Hello World";
		});

		app
			.use(router.routes())
			.use(router.allowedMethods)
			.listen(port, () => {
				console.log(`Started application on ${port}`);
			});

	}catch(error){

	}
})();
