const { getAllProducts } = require("../../models/products.model");

function httpGetAllProducts(req, res) {
  const products = getAllProducts();
  return res.status(200).json(products);
}

module.exports = {
  httpGetAllProducts,
};
