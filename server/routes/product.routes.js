const express = require("express");
const { getProducts } = require("../controllers");

const product = express.Router();

product.get("/", async (req, res) => {
  const { page = 1, limit = 20, sortBy = "_id", order = "desc" } = req.query;
  try {
    let products = await getProducts(page, limit, sortBy, order);
    return res.send({ message: "Product found", data: products });
  } catch (error) {
    return sendError(res, error);
  }
});

module.exports = product;
