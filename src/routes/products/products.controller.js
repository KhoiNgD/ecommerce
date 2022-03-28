const {
  getAllProducts,
  getProductsByCategory,
} = require("../../models/products.model");

function httpGetAllProducts(req, res) {
  const products = getAllProducts();
  return res.status(200).json(products);
}

function httpGetProductsByCategory(req, res) {
  const { category } = req.params;
  const products = getProductsByCategory(category);

  return res.status(200).json(products);
}

module.exports = {
  httpGetAllProducts,
  httpGetProductsByCategory,
};
