const Product = require('../models/Product');

module.exports.productList = async function productList (ctx, next) {
    const products = await Product.find({});

    ctx.body = { products }
}
