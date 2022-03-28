const products = require("../data.json");

function getAllProducts() {
  return products;
}

module.exports = {
  getAllProducts,
};
