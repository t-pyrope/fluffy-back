module.exports = function mapProduct(product) {
    return {
        id: product.id,
        title: product.title,
        src: product.src,
        thumbnail: product.thumbnail,
        description: product.description,
        price: product.price,
    }
}
