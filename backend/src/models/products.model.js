const products = require("../data.json");

function getAllProducts() {
  return products;
}

function getProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}

module.exports = {
  getAllProducts,
  getProductsByCategory,
};
