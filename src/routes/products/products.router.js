const express = require("express");
const {
  httpGetAllProducts,
  httpGetProductsByCategory,
} = require("./products.controller");

const productsRouter = express.Router();

productsRouter.get("", httpGetAllProducts);
productsRouter.get("/:category", httpGetProductsByCategory);

module.exports = productsRouter;
