const express = require("express");
const {
  httpGetAllProducts,
  httpGetProductsByCategory,
  httpGetProduct,
} = require("./products.controller");

const productsRouter = express.Router();

productsRouter.get("", httpGetAllProducts);
productsRouter.get("/:category", httpGetProductsByCategory);
productsRouter.get("/:category/:slug", httpGetProduct);

module.exports = productsRouter;
