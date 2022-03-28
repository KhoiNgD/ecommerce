const products = require("../data.json");

function getAllProducts() {
  return products;
}

function getProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}

function getProduct(category, slug) {
  return products.find(
    (product) => product.category === category && product.slug === slug
  );
}

module.exports = {
  getAllProducts,
  getProductsByCategory,
  getProduct,
};
