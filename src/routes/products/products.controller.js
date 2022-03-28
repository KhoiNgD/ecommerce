const {
  getAllProducts,
  getProductsByCategory,
  getProduct,
} = require("../../models/products.model");

function httpGetAllProducts(req, res) {
  const products = getAllProducts();
  return res.status(200).json(products);
}

function httpGetProductsByCategory(req, res) {
  console.log(123);
  const { category } = req.params;
  const products = getProductsByCategory(category);

  return res.status(200).json(products);
}

function httpGetProduct(req, res) {
  const { category, slug } = req.params;

  const product = getProduct(category, slug);

  return res.status(200).json(product);
}

module.exports = {
  httpGetAllProducts,
  httpGetProductsByCategory,
  httpGetProduct,
};
