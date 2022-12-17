const Koa = require('koa');
const Router = require('koa-router');

const { productList } = require('./controllers/products');

const app = new Koa();

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        if (err.status) {
            ctx.status = err.status;
            ctx.body = { error: err.message }
        } else {
            console.error(err);
            ctx.status = 500;
            ctx.body = { error: 'Internal server error' }
        }
    }
})

const router = new Router();

router.get('/products', productList);

app.use(router.routes());

module.exports = app
