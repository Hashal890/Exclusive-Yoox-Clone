const express = require("express");
const { getProducts, getProductById } = require("../controllers");
const { sendRequiredFieldError, sendError } = require("../helper");
const product = express.Router();

product.get("/", async (req, res) => {
  const { page = 1, limit = 20, sortBy = "_id", order = "asc", ...others } = req.query;
  try {
    let products = await getProducts(page, +limit, sortBy, order, others);
    return res.send({
      message: "Product found",
      data: products.data,
      totalPages: Math.ceil(products.totalCount / limit),
    });
  } catch (error) {
    return sendError(res, error);
  }
});

product.get("/:prodId", async (req, res) => {
  try {
    let product = await getProductById(req.params.prodId);
    res.send({ message: "Product found", data: product });
  } catch (error) {
    return sendError(res, error);
  }
});

module.exports = product;
